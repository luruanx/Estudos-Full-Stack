import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const CartSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <RocketIcon className="mr-2" />
                    <p>Carrinho</p>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col gap-5 mx-3">
                    ...
                </div>

                <Separator/>

                <div className="flex justify-between items-center text-xs mx-3">
                    <div>Subtotal:</div>
                    <div>...</div>
                </div>

                <Separator/>

                <div className="text-center">
                    <Button>Finalizar Compra</Button>
                </div>                
            </SheetContent>
        </Sheet>
    )
}