import apiSpring from "@/app/apiSpring/back-api"
import page from "../dev/page"

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

    export{
        getProducts,
        getProductsCategories,
        deleteProductById
    }
