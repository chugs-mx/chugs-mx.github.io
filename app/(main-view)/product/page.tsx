import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DataTable from "@/components/data-table";
import {
  fetchCategories,
  fetchProduct,
  fetchSubcategories,
} from "./fetchProduct";
import { ProductHeader } from "./ProductHeader";
import { Pagination } from "./Pagination";
import { Product } from "@/types/Product";
import { columns } from "@/components/products/columns";

export const metadata = {
  title: "Producto",
  description: "Administra tus productos",
};

const page = async (props: {
  searchParams: Promise<{
    search?: string;
    page?: string;
    size?: string;
    sort?: string;
    asc?: string;
    category?: string;
  }>;
}) => {
  const session = await auth();
  if (!session || session?.user?.role !== "ADMIN") {
    redirect("/login");
  }
  const searchParams = await props.searchParams;

  const fetchedPage = await fetchProduct(
    searchParams.search,
    searchParams.page,
    searchParams.size,
    searchParams.sort,
    searchParams.asc,
    searchParams.category
  );
  const fetchedCategories = await fetchCategories();
  const fetchedSubcategories = await fetchSubcategories();

  return (
    <div className="flex flex-col gap-4 min-w-full p-4">
      <ProductHeader
        placeholder="Busca por Nombre, Categoría"
        categories={fetchedCategories}
        subcategories={fetchedSubcategories}
      />
      <DataTable<Product> items={fetchedPage.content} columns={columns} />
      <Pagination pageMeta={fetchedPage.page} />
    </div>
  );
};

export default page;
