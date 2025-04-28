import apiSpring from "@/app/apiSpring/back-api"

const PATH = "/inventories"

type GetInventoriesParams = {
    search?: string | null
    page?: number | null
    pageSize?: number | null
    sort?: string | null
    sortDirection?: string | null
    category?: string | null
    subCategory?: string | null
}

const getInventories = ({
                                  search,
                                  page = 1,
                                  pageSize = 10,
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
    if (page) { page = page -1; }
    params.append("page", String(page))
    params.append("size", String(pageSize))

    console.log(`${PATH}?${params.toString()}`)
    return apiSpring(
        {
            url:`${PATH}?${params.toString()}`,
            method: "GET"
        }
    )
}


export { getInventories }