import {getInventories, getInventoriesCategories, getInventoriesSubcategories, deleteInventoryById} from "@/app/api/back/inventory-api";

type Inventory = {
    inventoryId: number;
    name: string;
    description: string;
    price: number;
    category: string;
    subCategory: string;
    quantity: number;
}

type InventoryResponse = {
    content: Inventory[];
    page: {
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    };
};

export async function fetchInventory(search?: string, page?: string, pageSize?: string, sort?: string, sortDirection?: string, category?: string, subCategory?: string) : Promise<InventoryResponse>{
    try {
        const res = await getInventories(
            {
                search,
                page,
                pageSize,
                sort,
                sortDirection,
                category,
                subCategory
            }
        )
        return res.data;
    } catch (error) {
        console.error("Error fetching inventory:", error);
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

export async function fetchSubcategories() {
    try {
        const res = await getInventoriesSubcategories();
        return res.data;
    } catch (e) {
        console.error("Error fetching categories:", e);
        throw new Error("Error fetching categories");
    }
}

export async function fetchCategories() {
    try {
        const res = await getInventoriesCategories();
        return res.data;
    } catch (e) {
        console.error("Error fetching categories:", e);
        throw new Error("Error fetching categories");
    }
}