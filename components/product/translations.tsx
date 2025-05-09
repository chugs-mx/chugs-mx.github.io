export const productEnums = {
  HAMBURGERS: "Hamburguesas",
  DRINKS: "Bebidas",
  EXTRA: "Extras",
  POTATOES: "Papas",
  DESSERTS: "Postres",
};

export function translateCategory(category: string) {
  return productEnums[category as keyof typeof productEnums] || category;
}
