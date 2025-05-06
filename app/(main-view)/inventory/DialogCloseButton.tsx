import {Trash2} from "lucide-react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {DeleteInventory} from "@/app/(main-view)/inventory/DeleteInventory";

export function DialogCloseButton({id}: {id: string}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="cursor-pointer">
                    <Trash2 className="stroke-primary-foreground"/>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Eliminar Artículo</DialogTitle>
                    <DialogDescription>
                        Estás a punto de eliminar este artículo. ¿Estás seguro de que deseas continuar?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <DeleteInventory id={Number(id)}/>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
