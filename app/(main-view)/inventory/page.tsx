import {auth} from "@/auth";
import { redirect } from "next/navigation";
import ClientInventoriesPage from "./ClientInventoriesPage";

const page = async () => {
    const session = await auth()
    if (!session || session?.user?.role !== "ADMIN") {
        redirect("/login");
    }

    return <ClientInventoriesPage />;
};

export default page
