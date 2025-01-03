import { User } from "../../prisma/generated/client";
import { Request } from "express";
import "express";

export type UserPayload = {
  id: string;
};

export type PromotorPayload = {
  id: string;
};

declare global {
  namespace Express {
    export interface Request {
      user?: UserPayload;
      promotor?: PromotorPayload;
    }
  }
}

export interface CreateEventRequest {
  title: string;
  category: string;
  location: string;
  venue: string;
  description: string;
  date: string;
  time: string;
  tickets: {
    name: string;
    price: number;
    quantity: number;
    description?: string;
  }[];
}

export interface OrderPayload {
  ticketId: number;
  quantity: number;
  totalPrice: number;
  finalPrice: number;
  pointsRedeemed?: number;
  percentage?: number;
}

export interface OrderResponse {
  message: string;
  orderId: number;
}

export interface OrderRequest {
  ticketId: number;
  quantity: number;
  totalPrice: number;
  finalPrice: number;
  pointsRedeemed?: number;
  percentage?: number;
}

export interface TransactionDetails {
  id: string;
  price: number;
  quantity: number;
  name: string;
}

export interface CustomerDetails {
  firstName: string;
  email: string;
}

export interface CallbackDetails {
  finish: string;
  error: string;
}

export interface TransactionResponse {
  token: string;
  redirect_url: string;
}

export interface NotificationResponse {
  order_id: string;
  transaction_status: string;
  fraud_status?: string;
  signature_key?: string;
  status_code: string;
  status_message: string;
  transaction_id: string;
  payment_type: string;
  transaction_time: string;
  gross_amount: string;
}

declare module "midtrans-client" {
  interface ClientConfig {
    isProduction?: boolean;
    serverKey: string;
    clientKey: string;
    enabledPayments?: string[];
    paymentOverrideNotification?: {
      url: string;
    };
  }

  interface TransactionDetails {
    order_id: string;
    gross_amount: number;
  }

  interface ItemDetails {
    id: string;
    price: number;
    quantity: number;
    name: string;
  }

  interface CustomerDetails {
    first_name: string;
    email: string;
  }

  interface CallbackDetails {
    finish: string;
    error: string;
  }

  interface TransactionResponse {
    token: string;
    redirect_url: string;
  }

  interface NotificationResponse {
    order_id: string;
    transaction_status: string;
    fraud_status?: string;
    signature_key?: string;
    status_code: string;
    status_message: string;
    transaction_id: string;
    payment_type: string;
    transaction_time: string;
    gross_amount: string;
  }

  export class CoreApi {
    constructor(config: ClientConfig);
    transaction: {
      notification(notification: any): Promise<NotificationResponse>;
      status(orderId: string): Promise<NotificationResponse>;
    };
  }

  export class Snap {
    constructor(config: ClientConfig);
    createTransaction(parameter: {
      transaction_details: TransactionDetails;
      item_details: ItemDetails[];
      customer_details: CustomerDetails;
      callbacks: CallbackDetails;
      credit_card?: {
        secure?: boolean;
      };
      expiry?: {
        unit: string;
        duration: number;
      };
    }): Promise<TransactionResponse>;
  }
}
