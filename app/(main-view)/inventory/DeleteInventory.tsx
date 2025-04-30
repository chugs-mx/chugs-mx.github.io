import {Button} from "@/components/ui/button";
import {deleteInventory} from "@/app/_actions/inventory.actions";

export function DeleteInventory({id}: { id: number }) {
    const deleteInventoryWithId = deleteInventory.bind(null, id)


    return(
        <form action={deleteInventoryWithId}>
            <Button type="submit"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground cursor-pointer mr-2">
                Eliminar
            </Button>
        </form>
    )
}