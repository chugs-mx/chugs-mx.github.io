"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { translateCategory } from "@/components/product/translations";


const productSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Precio inválido"),
  stock: z.coerce.number().min(0, "Stock inválido"),
  category: z.string().min(1, "Selecciona una categoría"),
});

type ProductFormData = z.infer<typeof productSchema>;

export function AddProductModal({
    open,
    onClose,
    categories,
    onCategoryChange,
  }: {
    open: boolean;
    onClose: () => void;
    categories: string[];
    onCategoryChange: (value: string) => void;
  }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductFormData) => {
    console.log("Datos enviados:", data);
    //POST al backend
    reset();
    onClose(); 
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-2xl">
        <DialogHeader>
          <DialogTitle>Agregar nuevo producto</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <Input placeholder="Nombre" {...register("name")} />
                {errors.name && (
                <p className="text-primary-foreground text-sm">{errors.name.message}</p>
                )}
            </div>
            <div>
                <select
                    className="text-sm px-2 py-2"
                    {...register("category")}
                    onChange={(e) => {
                        onCategoryChange(e.target.value);
                    }}
                    >
                    <option value="">Categorías</option>
                    {categories.map((category, i) => (
                        <option key={i} value={category}>
                        {translateCategory(category)}
                        </option>
                    ))}
                </select>
                {errors.category && (
                <p className="text-sm">{errors.category.message}</p>
                )}
            </div>
        </div>
         
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {/* seleccionar tipo */}

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tamaño e ingredientes por defecto */}
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                {/*Cargar Imagen*/ }
            </div>
            <div className="grid gap-2">
                <div>
                    <Label>Precio</Label>
                    <Input type="number" step="0.01" {...register("price")} />
                    {errors.price && (
                        <p className="text-sm">{errors.price.message}</p>
                    )}
                </div>
                <div>
                    <Label>Descripción</Label>
                    <Textarea rows={3} {...register("description")} />
                </div>
            </div>

        </div>      

          <DialogFooter>
            <Button variant="outline" type="button" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
