"use client";

import { useState, useEffect } from "react";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import IngredientSelector from "@/components/ingredient-selector";
import ImageUploader from "@/components/image-uploader";
import MultipleSelectorDemo from "@/components/multi-autocomplete";
import { postJsonProduct } from "@/app/apiSpring/product-api";
import { productSchema, ProductFormValues } from "@/schemas/product-schema";
import { Category, Subcategory } from "@/types/Category";
import { capitalize } from "@/types/String";
import Toast from "@/components/Toast";

export function AddProductModal({
  open,
  onClose,
  categories,
  subcategories,
  productId,
}: {
  open: boolean;
  onClose: () => void;
  categories: Category[];
  subcategories: Subcategory[];
  productId?: number;
}) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] =
    useState<Subcategory | null>(null);

  const selectedSubcategories =
    categories.find((cat) => cat.name === selectedCategory)?.subcategories ||
    [];

  useEffect(() => {
    setValue("defaultIngredients", []);
    setValue("size", undefined);
  }, [selectedSubcategory]);

  const [toastMessage, setToastMessage] = useState("");
  const [isErrorToast, setIsErrorToast] = useState(false);

  const onSubmit: SubmitHandler<ProductFormValues> = async (formData) => {
    console.log("Formulario enviado", formData);
    try {
      if (formData.price === undefined) {
        setIsErrorToast(true);
        setToastMessage("El precio es obligatorio");
        return;
      }

      const defaultIngredients = formData.defaultIngredients?.map((id) =>
        Number(id)
      );

      const productData = {
        name: formData.name,
        description: formData.description || "",
        price: formData.price,
        categoryId: Number(formData.category),
        subcategoryId: Number(formData.subcategory),
        defaultIngredients: selectedSubcategory?.defaultIngredients.filter(
          (ingredient) =>
            formData.defaultIngredients?.includes(ingredient.id.toString())
        ),
        sizeId: formData.size?.id,
      };

      await postJsonProduct(productData);
      setIsErrorToast(false);
      setToastMessage("Producto creado con éxito");
      reset();
      onClose();
    } catch (error) {
      console.error("Error al crear el producto:", error);
      setIsErrorToast(true);
      setToastMessage("Error al crear el producto");
    }
  };

  {
    toastMessage && (
      <Toast
        message={toastMessage}
        isError={isErrorToast}
        onClose={() => setToastMessage("")}
      />
    );
  }

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
                {...register("category", { valueAsNumber: true })}
                onChange={(e) => {
                  const selected = Number(e.target.value);
                  setSelectedCategory(
                    categories.find((cat) => cat.id === selected)?.name || null
                  );
                }}
              >
                <option value="">Categorías</option>
                {categories.map((category, i) => (
                  <option key={category.id} value={category.id}>
                    {capitalize(category.name)}
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
                Subcategoría
              </Label>
            </div>

            <div className="flex justify-center">
              <Controller
                name="subcategory"
                control={control}
                render={({ field }) => (
                  <ToggleGroup
                    variant="outline"
                    type="single"
                    className="flex flex-wrap gap-2"
                    value={field.value?.toString()}
                    onValueChange={(value) => {
                      const numValue = Number(value);
                      field.onChange(numValue);
                      const selected = subcategories.find(
                        (sub) => sub.id === numValue
                      );
                      if (selected) {
                        setSelectedSubcategory(selected);
                      } else {
                        setSelectedSubcategory(null);
                      }
                      setValue("size", undefined);
                    }}
                  >
                    {selectedSubcategories.map((sub) => (
                      <ToggleGroupItem
                        className="text-background text-sm sm:text-lg font-boltext-sm px-3 py-1 border rounded-lg w-full"
                        key={sub.id}
                        value={sub.id.toString()}
                        aria-label="Subcategoría"
                      >
                        {sub.name}
                      </ToggleGroupItem>
                    ))}
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
                {(() => {
                  const subcategorySizes =
                    selectedSubcategory?.subcategorySize || [];

                  if (subcategorySizes.length === 0) {
                    return (
                      <p className="text-background text-sm italic mt-2">
                        No hay tamaños disponibles para esta subcategoría.
                      </p>
                    );
                  }

                  return (
                    <Controller
                      name="size"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup
                          value={field.value?.id?.toString()}
                          onValueChange={(value) => {
                            const selectedSize = subcategorySizes.find(
                              (size) => size.id.toString() === value
                            );
                            if (selectedSize) {
                              field.onChange(selectedSize);
                            }
                          }}
                        >
                          {subcategorySizes.map((size) => (
                            <div
                              key={size.id}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={size.id.toString()}
                                id={`size-${size.id}`}
                              />
                              <Label htmlFor={`size-${size.id}`}>
                                {capitalize(size.unitAbbreviation)} (
                                {size.quantity})
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    />
                  );
                })()}
              </div>
            </div>

            <div className="flex-[2]">
              <h2 className="text-background text-lg sm:text-xl font-bold pb-1">
                Ingredientes por defecto
              </h2>
              {selectedSubcategory &&
                selectedSubcategory.defaultIngredients?.length > 0 && (
                  <Controller
                    name="defaultIngredients"
                    control={control}
                    render={({ field }) => {
                      /** const ingredientOptions =
                        selectedSubcategory?.defaultIngredients.map(
                          (ingredient) => ({
                            label: ingredient.name,
                            value: ingredient.id.toString(),
                          })
                        ) ?? []; */
                      const ingredientOptions =
                        selectedSubcategory.defaultIngredients ?? [];

                      return (
                        <MultipleSelectorDemo
                          /**value={
                            Array.isArray(field.value)
                              ? field.value.map((v) => v.toString())
                              : []
                          }*/
                          value={
                            Array.isArray(field.value)
                              ? field.value.map((v) =>
                                  typeof v === "number" ? v.toString() : v
                                )
                              : []
                          }
                          onChange={(selectedIds: string[]) => {
                            field.onChange(selectedIds);
                          }}
                          options={ingredientOptions.map((ingredient) => ({
                            label: ingredient.name ?? "Sin nombre",
                            value: ingredient.id.toString(),
                          }))}
                          //onChange={field.onChange}
                          //options={ingredientOptions}
                        />
                      );
                    }}
                  />
                )}
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
