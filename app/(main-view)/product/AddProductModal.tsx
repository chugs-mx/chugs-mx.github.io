"use client";

import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
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
import MultipleSelectorDemo from "@/components/multi-autocomplete";
import { postJsonProduct } from "@/app/apiSpring/product-api";
import { productSchema, ProductFormValues } from "@/schemas/product-schema";

export function AddProductModal({
  open,
  onClose,
  categories,
  productId,
}: {
  open: boolean;
  onClose: () => void;
  categories: string[];
  productId?: number;
}) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  console.log("Errores del formulario:", errors);

  const onSubmit: SubmitHandler<ProductFormValues> = async (formData) => {
    console.log("Formulario enviado", formData);
    try {
      if (formData.price === undefined) {
        alert("El precio es obligatorio");
        return;
      }

      const productData = {
        ...formData,
        types: formData.types ?? [],
      };

      await postJsonProduct(productData);
      alert("Producto creado con éxito");
      reset();
      onClose();
    } catch (error) {
      console.error("Error al crear el producto:", error);
      alert("Error al crear el producto");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-2xl sm:max-w-3xl lg:max-w-4xl  bg-primary-foreground border-primary-foreground">
        <DialogHeader>
          <DialogTitle className="text-background text-4xl font-bold tracking-widest border-b border-background pb-2">
            Añadir nuevo producto
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit, (errors) => {
            console.error("Errores detectados en onError:", errors);
          })}
          className="space-y-4 py-4"
        >
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
                  //onCategoryChange(e.target.value);
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
              <Controller
                name="types"
                control={control}
                render={({ field }) => (
                  <ToggleGroup
                    variant="outline"
                    type="multiple"
                    className="flex flex-wrap gap-2"
                    value={field.value || []}
                    onValueChange={field.onChange}
                  >
                    <ToggleGroupItem value="carne" aria-label="Subcategoria">
                      Hamburguesa de Carne
                    </ToggleGroupItem>
                    <ToggleGroupItem value="pollo" aria-label="Subcategoria">
                      Hamburguesa de Pollo
                    </ToggleGroupItem>
                    <ToggleGroupItem value="vegana" aria-label="Subcategoria">
                      Hamburguesa Vegana
                    </ToggleGroupItem>
                  </ToggleGroup>
                )}
              />
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="flex-[1]">
              <Label className="text-background text-xl font-bold pb-2">
                Tamaño
              </Label>
              <div className="flex justify-start text-background font-bold">
                <Controller
                  name="size"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sencilla" id="r1" />
                        <Label htmlFor="r1">Sencilla</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="doble" id="r2" />
                        <Label htmlFor="r2">Doble</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="triple" id="r3" />
                        <Label htmlFor="r3">Triple</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
            </div>
            <div className="flex-[2]">
              <h2 className="text-background text-lg sm:text-xl font-bold pb-1">
                Ingrediente por defecto
              </h2>
              <Controller
                name="defaultIngredients"
                control={control}
                render={({ field }) => (
                  <MultipleSelectorDemo
                    value={field.value || []}
                    onChange={field.onChange}
                  />
                )}
              />
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
                  {...register("price", {
                    valueAsNumber: true,
                    setValueAs: (v) => {
                      const parsed = Number(v);
                      return isNaN(parsed) || v === "" ? 0 : parsed;
                    },
                  })}
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
                disabled={false}
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
