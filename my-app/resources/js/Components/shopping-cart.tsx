import { Button } from "@/Components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table"
import { Separator } from "@/Components/ui/separator"
import { ShoppingCartSimple, Trash, ShoppingBag } from "@phosphor-icons/react";

export function ShoppingCart() {
  return (
    <>
    <Sheet>
    <SheetTrigger>
      <Button
      className="bg-black flex gap-2 h-9 w-9 p-0 sm:w-max sm:h-11 sm:px-3">
      <ShoppingCartSimple weight="bold" size={20}/>
        <p className="hidden sm:block">Carrinho</p>
      </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col" closeBtnColor="black">
        <SheetHeader>
          <SheetTitle className="flex flex-row gap-2 items-center">
            <ShoppingCartSimple weight="bold" size={28}/>
            Carrinho
            </SheetTitle>
          <SheetDescription>
            <Table>
              <TableCaption>Esses são seus pedidos</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Produto</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead className="text-right">Preço</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Energizer 312</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell className="text-right">R$250,00</TableCell>
                  <TableCell>
                    <Button size="icon" className="bg-red-500 hover:bg-red-400">
                      <Trash size={20} weight="bold"/>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SheetDescription>
        </SheetHeader>
        <div className="mt-auto flex flex-col gap-3">
        <Separator />
        <div className="flex flex-row place-content-between font-bold">
          Total
          <p>R$250,00</p>
        </div>
        <Separator />
        <Button className="bg-green-400 flex flex-row ml-auto gap-3 hover:bg-green-300">
          <ShoppingBag size={32} color="black" />
          <p className="text-black">Adicionar ao Carrinho</p>
        </Button>
        </div>
      </SheetContent>
    </Sheet>
    </>
  );
}