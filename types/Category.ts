export type Size = {
    id: number;
    quantity: number;
    unitName: string;
    unitAbbreviation: string;
};
  
export type Ingredient = {
    id: number;
    name?: string;
    quantity: number;
    size?: string;
};

export type Subcategory = {
    id: number;
    name: string;
    subcategorySize: {
        id: number;
        quantity: number;
        unitName: string;
        unitAbbreviation: string;
    }[];
    defaultIngredients: Ingredient[];
  };
  
  export type Category = {
    id: number;
    name: string;
    subcategories: Subcategory[];
  };