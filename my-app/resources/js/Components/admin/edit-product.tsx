import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/Components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "@/Components/ui/textarea";

import { Pencil } from "@phosphor-icons/react";

interface Product {
  id: number;
  image: string;
  model: string;
  product: string;
  quantity: number;
  price: number;
  description: string;
}

interface EditProductProps {
  product: Product;
  onEdit: () => void;
}

export function EditProduct({ product, onEdit }: EditProductProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button size={"icon"} onClick={onEdit}>
            <Pencil size={18} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Produto</DialogTitle>
            <DialogDescription>
              Por aqui você pode definir as informações deste produto.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col mx-auto gap-4">
                <Input id="picture" type="file" className="transition-bg bg-center bg-[length:30px_100px] bg-no-repeat hover:bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY4OEE4LDgsMCwwLDAsMjEzLjY2LDgyLjM0Wk0xNjAsNTEuMzEsMTg4LjY5LDgwSDE2MFpNMjAwLDIxNkg1NlY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4VjIxNlptLTQwLTY0YTgsOCwwLDAsMS04LDhIMTM2djE2YTgsOCwwLDAsMS0xNiwwVjE2MEgxMDRhOCw4LDAsMCwxLDAtMTZoMTZWMTI4YTgsOCwwLDAsMSwxNiwwdjE2aDE2QTgsOCwwLDAsMSwxNjAsMTUyWiIvPjwvc3ZnPg==)] file:text-transparent h-[96px] w-[96px] mx-auto bg-transparent transition-all hover:bg-black/80 z-10" />
                <div className="absolute left-[6rem] flex justify-center items-center">
                  <img id="product" src={product?.image} width={96} />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea id="description" placeholder="Escreva a descrição do produto..." className="resize-none" defaultValue={product?.description} />
                </div>
              </div>
              <div className="grid gap-4 py-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="model">Modelo</Label>
                  <Input type="text" id="model" placeholder="Modelo" defaultValue={product?.model} />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="product">Produto</Label>
                  <Input type="text" id="product" placeholder="Produto" defaultValue={product?.product} />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="quantity">Quantidade</Label>
                  <Input type="number" id="quantity" placeholder="Quantidade" defaultValue={product?.quantity} />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button type="button" variant="destructive">Excluir</Button>
                </DialogTrigger>
                <DialogContent className="w-[24rem]">
                  <DialogHeader>
                    <DialogTitle>Você tem certeza?</DialogTitle>
                    <DialogDescription>
                      Essa ação não pode ser desfeita. Isso irá deletar permanentemente o produto do servidor.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogClose>
                    <Button type="button" variant="outline">Cancelar</Button>
                    <Button type="button" variant="destructive">Excluir</Button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancelar</Button>
              </DialogClose>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
