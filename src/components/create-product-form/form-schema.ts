import { z, ZodType } from "zod";


export const createProductFormSChema = z.object({
  name: z.string(),
  description: z.string().optional(),
  category: z.enum(["Cloth", "Electronics", "Vehicles", "Cosmetics", "Property"]),
  pictureUrl: z.string().url(),
  price: z.number().min(0).max(1000),
})
;

