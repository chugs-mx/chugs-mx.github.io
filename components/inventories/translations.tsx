
export const inventoryEnums = {
    CLUTTER: "Embutidos",
    REFRIGERATED: "Refrigerado",
    CLEANING: "Limpieza",
    DISPOSABLE: "Desechable",
    FROZEN: "Congelado",

    INGREDIENT: "Ingrediente",
    PRODUCT_VARIANT: "Variante de producto",
    PRODUCT: "Producto",
    MEAT: "Carne",
    VEGETABLES: "Verduras",
    DRINKS: "Bebidas"
};

export function translateCategory(category: string) {
    return inventoryEnums[category as keyof typeof inventoryEnums] || category;
}

export function translateMeasureUnit(unitMeasure: string) {
    switch (unitMeasure) {
        case "LTR":
            return "L";
        case "KG":
            return "KG";
        case "UNIT":
            return "U";
        default:
            return unitMeasure;
    }
}