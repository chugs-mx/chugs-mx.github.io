"use server"
import {revalidatePath} from "next/cache";
import {deleteInventoryById} from "@/app/apiSpring/inventory-api";

export async function deleteInventory(id: number) {
    try {
        const res = await deleteInventoryById(id);
        revalidatePath("/inventory");
    } catch (e) {
        console.error("Error deleting inventory:", e);
        throw new Error("Error deleting inventory");
    }
}