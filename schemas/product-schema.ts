import { types } from "util";
import { z } from "zod";

const ingredientSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  size: z.string().optional(),
  name: z.string().optional(),
});

export const productSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().optional(),
    price: z.coerce.number({
      required_error: "El precio es obligatorio",
      invalid_type_error: "El precio debe ser un número válido",
    }).positive("El precio debe ser mayor a 0"),
    category: z.coerce.number().min(1, "La categoría es obligatoria"),
    subcategory: z.coerce.number().min(1, "La subcategoría es obligatoria"),
    size: z.object({
      id: z.coerce.number(),
      abbreviation: z.string(),
      quantity: z.number(),
    }).optional(),
    defaultIngredients: z.array(z.union([z.number(), z.string()])).optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;