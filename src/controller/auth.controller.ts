import { Request, Response } from "express";
import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { findUser } from "../services/user.service";
import { sign, verify } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { generateReferalCode } from "../utils/generateReferalCode";
import { transporter } from "../services/mailer";
import { findPromotor } from "../services/promotor.service";
import { addMonths } from "date-fns";

const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;

export class AuthController {
  async loginUser(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const user = await findUser(data, data);

      if (!user) throw { message: "User not found!" };
      if (!user.isVerify) throw { message: "User not verified!" };

      const isValidPass = await compare(password, user.password);
      if (!isValidPass) throw { message: "Incorrect password!" };

      const payload = { id: user.id, type: "user" };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      console.log("Generated Token:", token);
      console.log("Token Payload:", payload);

      res.status(200).send({
        message: "Login successful",
        token,
      });
    } catch (err) {
      console.error(err);
      res.status(400).send({
        message: "Login failed",
      });
    }
  }

  //Register User

  async registerUser(req: Request, res: Response) {
    try {
      const { username, email, password, confirmPassword, refCode } = req.body;

      if (password !== confirmPassword)
        throw { message: "Passwords do not match!" };

      const user = await findUser(username, email);
      if (user) throw { message: "Username or email has already been used" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newUserData: any = {
        username,
        email,
        password: hashPassword,
        refCode: generateReferalCode(),
      };

      // Cek si Reveral Code nya
      if (refCode) {
        const referer = await prisma.user.findUnique({
          where: { refCode },
        });
        if (!referer) throw { message: "Invalid referral code" };

        //plus point jika si reveral dipakai
        await prisma.user.update({
          where: { id: referer.id },
          data: { points: { increment: 10000 } },
        });

        // persentase si kupon jika dipakai
        const coupon = await prisma.userCoupon.create({
          data: {
            percentage: 10,
            isRedeem: false,
            expiredAt: addMonths(new Date(), 3),
          },
        });
        newUserData.percentage = coupon.percentage;
        newUserData.userCouponId = coupon.id;
        newUserData.refCodeBy = referer.id;

        //log untuk melihat hasil si referal dari siapa
        await prisma.refLog.create({
          data: {
            pointGet: 10000,
            expiredAt: addMonths(new Date(), 3),
            isUsed: false,
            user: {
              connect: { id: referer.id },
            },
          },
        });
      }

      // buat user baru dari hasil data
      const newUser = await prisma.user.create({ data: newUserData });

      const payload = { id: newUser.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const linkUser = `${base_url_fe}/verifyuser/${token}`;

      const templatePath = path.join(
        __dirname,
        "../templates",
        "verifyUser.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        username,
        linkUser,
        refCode: newUser.refCode,
      });

      // Mailer transport
      await transporter.sendMail({
        from: "dattariqf@gmail.com",
        to: email,
        subject: "Welcome To TIKO",
        html,
      });

      res.status(201).json({ massage: "Registration Succesfull" });
    } catch (err: any) {
      console.error(err);
      res.status(400).json({ massage: "Internal server error" });
    }
  }

  async verifyUser(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedUser: any = verify(token, process.env.JWT_KEY!);
      await prisma.user.update({
        data: { isVerify: true },
        where: { id: verifiedUser.id },
      });
      res.status(200).send({ message: "Verify Successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////   PROMOTOR   /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  async registerPromotor(req: Request, res: Response) {
    try {
      const { name, email, password, confirmPassword } = req.body;
      if (password != confirmPassword)
        throw { massage: "Password Not Match !" };

      const promotor = await findPromotor(name, email);
      if (promotor) throw { massage: "Name or Email has been used" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newPromotor = await prisma.promotor.create({
        data: {
          name,
          email,
          password: hashPassword,
        },
      });

      const payload = { id: newPromotor.id };

      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const linkPromotor = `${base_url_fe}/verifypromotor/${token}`;

      const templatePath = path.join(
        __dirname,
        "../templates",
        "verifyPromotor.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ name, linkPromotor });

      await transporter.sendMail({
        from: "dattariqf@gmail.com",
        to: email,
        subject: "Welcome To TIKO",
        html,
      });

      res.status(201).json({ massage: "Registration Succes" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ massage: "Registration Failed" });
    }
  }

  async loginPromotor(req: Request, res: Response): Promise<void> {
    try {
      const { data, password } = req.body;

      if (!data || !password) {
        res
          .status(400)
          .send({ success: false, message: "Data and password are required!" });
        return;
      }

      // Find promotor by name or email
      const promotor = await prisma.promotor.findFirst({
        where: {
          OR: [{ name: data }, { email: data }],
        },
      });

      if (!promotor) {
        res
          .status(404)
          .send({ success: false, message: "Promotor not found!" });
        return;
      }

      if (!promotor.isVerify) {
        res
          .status(403)
          .send({ success: false, message: "Promotor is not verified!" });
        return;
      }

      const isValidPass = await compare(password, promotor.password);
      if (!isValidPass) {
        res
          .status(401)
          .send({ success: false, message: "Incorrect password!" });
        return;
      }

      const payload = { id: promotor.id, type: "promotor" }; // ada tipecdcd
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

      res.status(200).json({
        success: true,
        message: "Login successful!",
        token,
      });
    } catch (err: any) {
      console.error("Error during promotor login:", {
        error: err.message,
        data: req.body.data,
      });
      res.status(500).send({
        success: false,
        message: "An unexpected error occurred.",
      });
    }
  }

  async verifyPromotor(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedPromotor: any = verify(token, process.env.JWT_KEY!);
      await prisma.promotor.update({
        data: { isVerify: true },
        where: { id: verifiedPromotor.id },
      });
      res.status(200).send({ message: "Verify Successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getSession(req: Request, res: Response): Promise<void> {
    try {
      // Retrieve token from Authorization header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).send({ message: "Unauthorized: No token provided" });
        return;
      }

      const token = authHeader.split(" ")[1];
      if (!token) {
        res.status(401).send({ message: "Unauthorized: Token missing" });
        return;
      }

      // Verify token
      const decoded = verify(token, process.env.JWT_KEY!) as {
        id: string;
        type: string;
      };

      if (!decoded || !decoded.type) {
        res.status(403).send({ message: "Forbidden: Invalid token" });
        return;
      }

      // Handle different user types
      if (decoded.type === "promotor") {
        const promotor = await prisma.promotor.findUnique({
          where: { id: decoded.id },
        });

        if (!promotor) {
          res.status(404).send({ message: "Promotor not found" });
          return;
        }

        res.status(200).send({
          id: promotor.id,
          type: "promotor",
          name: promotor.name,
          email: promotor.email,
          avatar: promotor.avatar || null,
        });
      } else if (decoded.type === "user") {
        const user = await prisma.user.findUnique({
          where: { id: decoded.id },
          select: {
            id: true,
            username: true,
            email: true,
            avatar: true,
            createdAt: true,
            points: true,
            refCode: true,
            updatedAt: true,
            isVerify: true,
            percentage: true,
            usercoupon: {
              select: {
                expiredAt: true,
              },
            },
          },
        });

        if (!user) {
          res.status(404).send({ message: "User not found" });
          return;
        }

        res.status(200).json({
          id: user.id,
          type: "user",
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          points: user.points,
          refCode: user.refCode,
          percentage: user.percentage,
          userCoupon: user.usercoupon?.expiredAt,
        });
      } else {
        res.status(403).json({ message: "Forbidden: Unknown token type" });
      }
    } catch (err) {
      console.error("Error fetching session:");
      res
        .status(401)
        .send({ message: "Unauthorized: Invalid or expired token" });
    }
  }
}
