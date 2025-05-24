import apiSpring from "@/app/api/back/back-api"

const PATH = "/inventories"

type GetInventoriesParams = {
    search?: string | null
    page?: string | null
    pageSize?: string | null
    sort?: string | null
    sortDirection?: string | null
    category?: string | null
    subCategory?: string | null
}

const getInventories = ({
                                  search,
                                  page,
                                  pageSize,
                                  sort,
                                  sortDirection,
                                  category,
                                  subCategory
                              }: GetInventoriesParams = {}) => {
    const params = new URLSearchParams()

    if (search) params.append("search", search)
    if (sort) params.append("sort", sort)
    if (sortDirection) params.append("asc", sortDirection)
    if (category) params.append("category", category)
    if (subCategory) params.append("subcategory", subCategory)
    if (page) {
        const pageNumber = Number(page) -1;
        params.append("page", String(pageNumber < 0 ? 0 : pageNumber))
    }
    if (pageSize) params.append("size", String(pageSize))

    return apiSpring(
        {
            url:`${PATH}?${params.toString()}`,
            method: "GET"
        }
    )
}

const getInventoriesSubcategories = () => {
    return apiSpring({
        url: `${PATH}/subcategories`,
        method: "GET"
    })
}

const getInventoriesCategories = () => {
    return apiSpring({
        url: `${PATH}/categories`,
        method: "GET"
    })
}

const deleteInventoryById = (id: number) => {
    return apiSpring({
        url: `${PATH}/${id}`,
        method: "DELETE"
    })
}


export {
    getInventories,
    getInventoriesSubcategories,
    getInventoriesCategories,
    deleteInventoryById,
}