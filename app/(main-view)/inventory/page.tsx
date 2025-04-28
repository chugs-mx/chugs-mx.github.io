import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {fetchInventory} from "@/app/(main-view)/inventory/fetchInventory";
import {InventoryHeader} from "@/app/(main-view)/inventory/InventoryHeader";

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

    return (
        <div className="flex flex-col gap-4">
            <InventoryHeader placeholder={"Busca por Nombre, Categoría o Subcategoría"}/>
            {fetchedPage?.content?.map((item: any) => (
                <div key={item.inventoryId} className="border p-4 rounded-lg border-blue-900/40 flex gap-5 justify-evenly">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p>Descripción: {item.description}</p>
                    <p>Precio: {item.unitPrice}</p>
                    <p>Categoría: {item.inventoryCategory}</p>
                    <p>Subcategoría: {item.subcategory}</p>
                    <p>Cantidad: {item.quantity}</p>
                </div>
            ))}
            {
                fetchedPage?.page?.totalPages > 1 && (
                    <div className="flex justify-center">
                        Pagina {fetchedPage.page.number + 1} de {fetchedPage.page.totalPages} | Tamaño de pagina {fetchedPage.page.size}
                    </div>
                )
            }
        </div>
    );
};

export default page
