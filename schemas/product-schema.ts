import { types } from "util";
import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().optional(),
    category: z.string().min(1, "La categoría es obligatoria"),
    types: z.array(z.string()).nonempty("Selecciona un tipo").optional(),
    size: z.string().min(1, "El tamaño es obligatorio"),
    defaultIngredients: z.array(z.string()).optional(),
    price: z.number({
        required_error: "El precio es obligatorio",
        invalid_type_error: "El precio debe ser un número válido",
      }).positive("El precio debe ser mayor a 0"),
});

export type ProductFormValues = z.infer<typeof productSchema>;