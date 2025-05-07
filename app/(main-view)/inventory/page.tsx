import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {fetchCategories, fetchInventory, fetchSubcategories} from "@/app/(main-view)/inventory/fetchInventory";
import {InventoryHeader} from "@/app/(main-view)/inventory/InventoryHeader";
import DataTable, {Column} from "@/components/data-table";
import {Pagination} from "@/app/(main-view)/inventory/Pagination";
import { Inventory } from "@/types/Inventory";
import { columns } from "@/components/inventories/columns";

export const metadata = {
    title: "Inventario",
    description: "Administra tu inventario",
}

const page = async (props: {
    searchParams: Promise<
        {
            search?: string,
            page?: string,
            size?: string,
            sort?: string,
            asc?: string,
            category?: string,
            subcategory?: string,
        }
    >;
}) => {
    const session = await auth()
    if (!session || session?.user?.role !== "ADMIN") {
        redirect("/login");
    }

    const searchParams = await props.searchParams;

    const fetchedPage = await fetchInventory(searchParams.search, searchParams.page, searchParams.size, searchParams.sort, searchParams.asc, searchParams.category, searchParams.subcategory);
    const fetchedCategories = await fetchCategories()
    const fetchedSubcategories = await fetchSubcategories()

    return (
        <div className="flex flex-col gap-4 min-w-full p-4">
            <InventoryHeader placeholder={"Busca por Nombre, Categoría o Subcategoría"} categories={fetchedCategories} subcategories={fetchedSubcategories} />
            <DataTable<Inventory> items={fetchedPage.content} columns={columns} />
            <Pagination pageMeta={fetchedPage.page} />
        </div>
    );
};

export default page;
