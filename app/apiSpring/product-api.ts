import apiSpring from "@/app/apiSpring/back-api"
import  { Ingredient } from "@/types/Category";

const PATH = "/products"

type GetProductsParams = {
    search?: string | null
    page?: string | null
    pageSize?: string | null
    sort?: string | null
    sortDirection?: string | null
    category?: string | null
}

    const getProducts = ({
        search,
        page,
        pageSize,
        sort,
        sortDirection,
        category
    }: GetProductsParams = {}) => {
        const params = new URLSearchParams()

        if( search ) params.append("search", search)
        if( sort ) params.append("sort", sort)
        if( sortDirection ) params.append("asc", sortDirection)
        if( category ) params.append("category", category)
        if( page ) {
            const pageNumber = Number(page) -1;
            params.append("page", String(pageNumber < 0 ? 0 : pageNumber))
        }
        if( pageSize ) params.append("size", String(pageSize))

        return apiSpring(
            {
                url: `${PATH}?${params.toString()}`,
                method: "GET"
            }
        )
    }

    const getProductsCategories = () => {
        return apiSpring({
            url: `${PATH}/categories`,
            method: "GET"
        })
    }

    const deleteProductById = (id: number) => {
        return apiSpring({
            url: `${PATH}/${id}`,
            method: "DELETE"
        })
    }

    const postFormProduct = (id: number, formData: FormData) => {
        return apiSpring({
            url: `${PATH}/${id}`,
            method: "POST",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    export type NewProductData = {
        name: string;
        description?: string;
        price: number;
        categoryId: number;
        subcategoryId: number;
        sizeId?: number;
        defaultIngredients?: Ingredient[];     
    };

    const postJsonProduct = async (data: NewProductData): Promise<any> => {
        console.log("Enviando producto");
        return apiSpring({
            url: `${PATH}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data
        })
    }

    const putJsonProduct = async (id: number, data: NewProductData): Promise<any> => {
        apiSpring({
            url: `${PATH}/${id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                data
        })
    }

    const getProductSubcategories = () => {
        return apiSpring({
            url: `${PATH}/subcategories`,
            method: "GET"  
        })
    }


    export{
        getProducts,
        getProductsCategories,
        deleteProductById,
        postJsonProduct,
        putJsonProduct,
        getProductSubcategories
    }
