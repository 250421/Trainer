import { z } from "zod";

export const addRestaurantSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
});

export type AddRestaurantSchema = z.infer<typeof addRestaurantSchema>;
