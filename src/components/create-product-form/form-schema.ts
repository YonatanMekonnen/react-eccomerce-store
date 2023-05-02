import { z, ZodType } from "zod";


export const createProductFormSChema = z.object({
  name: z.string().nonempty({message: "Product name can not be empty"}),
  description: z.string().optional(),
  category: z.enum(["Cloth", "Electronics", "Vehicles", "Cosmetics", "Property"]),
  pictureUrl: z.string().url(),
  price: z.number().min(0, 'Price must be greater than 0').max(1000, 'Price must be less than 1000').nullable()
});

