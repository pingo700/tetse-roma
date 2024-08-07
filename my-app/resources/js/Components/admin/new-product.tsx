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
import { Textarea } from "@/Components/ui/textarea"

import { PlusCircle } from "lucide-react";

export function NewProduct() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
              <Button>
                <PlusCircle className="w-4 h-4 mr-2"/>
                Novo Produto
              </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Novo Produto</DialogTitle>
            <DialogDescription>
              Por aqui você pode cadastrar um novo protuto.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-6">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col mx-auto gap-4">
              <Input id="picture" type="file" className="transition-bg bg-center bg-[length:30px_100px] bg-no-repeat hover:bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY4OEE4LDgsMCwwLDAsMjEzLjY2LDgyLjM0Wk0xNjAsNTEuMzEsMTg4LjY5LDgwSDE2MFpNMjAwLDIxNkg1NlY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4VjIxNlptLTQwLTY0YTgsOCwwLDAsMS04LDhIMTM2djE2YTgsOCwwLDAsMS0xNiwwVjE2MEgxMDRhOCw4LDAsMCwxLDAtMTZoMTZWMTI4YTgsOCwwLDAsMSwxNiwwdjE2aDE2QTgsOCwwLDAsMSwxNjAsMTUyWiIvPjwvc3ZnPg==)] file:text-transparent h-[96px] w-[96px] mx-auto bg-transparent transition-all hover:bg-black/80 z-10" />
              <div className="absolute left-[6rem] flex justify-center items-center">
                <img id="product" src="./src/assets/batteries/.png" width={96} className=""/>
              </div>
              <div className="grid w-full gap-1.5">
              <Label htmlFor="descripion">Descrição</Label>
                <Textarea id="descripion" placeholder="Escreva a descrição do produto..." className="resize-none"/>
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="model">Modelo</Label>
                <Input type="text" id="model" placeholder="Modelo" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="produto">Produto</Label>
                <Input type="text" id="product" placeholder="Produto" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="quantity">Quantidade</Label>
                <Input type="number" id="quantity" placeholder="Quantidade" />
              </div>
            </div>
          </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Criar</Button>
        </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}