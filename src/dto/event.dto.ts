import { Category, Location } from "../../prisma/generated/client";

export interface CreateEventDto {
  title: string;
  category: Category;
  location: Location;
  venue: string;
  description: string;
  date: string;
  time: string;
  tickets: {
    category: string;
    price: number;
    quantity: number;
  }[];
}
