import {getProducts, getProductsCategories, deleteProductById} from "@/app/apiSpring/product-api";
import {Product} from "@/types/Product";

type ProductResponse = {
    content: Product[];
    page: {
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }
}

export async function fetchProduct( search?: string, page?: string, pageSize?: string, sort?: string, sortDirection?: string, category?: string) : Promise<ProductResponse>{
    try {
        const res = await getProducts(
            {
                search,
                page,
                pageSize,
                sort,
                sortDirection,
                category
            }
        )
        return res.data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return {
            content: [],
            page: {
                number: 1,
                size: 10,
                totalElements: 0,
                totalPages: 1
            }
        };
    }
}

export async function fetchCategories() {
    try{
        const res = await getProductsCategories();
        return res.data;
    }catch (e) {   
        console.error("Error fetching categories:", e);
        throw new Error("Error fetching categories");
    }
}