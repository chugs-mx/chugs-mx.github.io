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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import IngredientSelector from "@/components/ingredient-selector";
import ImageUploader from "@/components/image-uploader";

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
      <DialogContent className="w-[90vw] max-w-2xl sm:max-w-3xl lg:max-w-4xl  bg-primary-foreground border-primary-foreground">
        <DialogHeader>
          <DialogTitle className="text-background text-4xl font-bold tracking-widest border-b border-background pb-2">
            Añadir nuevo producto
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full">
              <Label className="text-background text-xl font-bold pb-1">
                Nombre
              </Label>
              <Input
                className="bg-background focus:border-background"
                placeholder="Nombre"
                {...register("name")}
              />
              {errors.name && <p className="text-sm">{errors.name.message}</p>}
            </div>
            <div className="w-full">
              <Label className="text-background text-xl font-bold pb-1">
                Categoría
              </Label>
              <select
                className="text-sm px-2 py-2 bg-background w-full border border-primary-foreground rounded-md pb-1.5"
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

          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label className="text-background text-xl font-bold pb-1">
                Tipo de producto
              </Label>
            </div>

            <div className="flex justify-center">
              <ToggleGroup
                variant="outline"
                type="multiple"
                className="flex flex-wrap gap-2"
              >
                <ToggleGroupItem
                  value="carne"
                  aria-label="Subcategoria"
                  className="px-4 py-1 text-sm sm:text-base truncate border border-background rounded-md data-[state=on]:bg-background data-[state=on]:text-primary-foreground text-background font-bold"
                >
                  Hamburguesa de Carne
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="pollo"
                  aria-label="Subcategoria"
                  className="px-4 py-1 text-sm sm:text-base truncate border border-background rounded-md data-[state=on]:bg-background data-[state=on]:text-primary-foreground text-background font-bold"
                >
                  Hamburguesa de Pollo
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="vegana"
                  aria-label="Subcategoria"
                  className="px-4 py-1 text-sm sm:text-base truncate border border-background rounded-md data-[state=on]:bg-background data-[state=on]:text-primary-foreground text-background font-bold"
                >
                  Hamburguesa Vegana
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="flex-[1]">
              <Label className="text-background text-xl font-bold pb-2">
                Tamaño
              </Label>
              <div className="flex justify-start text-background font-bold">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Sencilla</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Doble</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Triple</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="flex-[2]">
              <h2 className="text-background text-lg sm:text-xl font-bold pb-1">
                Ingrediente por defecto
              </h2>
              <IngredientSelector />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-background text-lg sm:text-xl font-bold pb-1 ">
                Cargar Imagen
              </Label>
              <ImageUploader />
            </div>
            <div className="grid gap-2">
              <div>
                <Label className="text-background text-xl font-bold pb-1">
                  Precio
                </Label>
                <Input
                  className="bg-background"
                  type="number"
                  step="0.01"
                  {...register("price")}
                />
                {errors.price && (
                  <p className="text-sm">{errors.price.message}</p>
                )}
              </div>
              <div>
                <Label className="text-background text-xl font-bold pb-1">
                  Descripción
                </Label>
                <Textarea
                  className="bg-background"
                  rows={3}
                  {...register("description")}
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <div className="flex gap-4 justify-center sm:justify-end">
              <Button
                className="text-primary-foreground text-xl font-bold"
                variant="outline"
                type="button"
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                className="text-primary-foreground text-xl font-bold"
                type="submit"
              >
                Guardar
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
