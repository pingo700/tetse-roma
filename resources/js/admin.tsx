/* shadcn/ui */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { ScrollArea } from "@/Components/ui/scroll-area"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import { Label } from "@/Components/ui/label";


/* logos */
import { ReactComponent as MainLogo } from '../assets/MainLogo.svg';
import { ReactComponent as MainLogoText } from '../assets/MainLogoText.svg';


import { User, Users, SignOut, Package, CaretRight,ClipboardText } from "@phosphor-icons/react";
import { Products } from "@/Components/admin/products";

export function Admin() {
  return (
    <>
    <header className="min-h-[calc(5vh_-_56px)] transition-[margin-left] ease-in-out duration-300 border sticky top-0 z-10 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between p-1 sm:px-2 gap-2 sm:gap-6 items-center">
      <div className='flex items-center gap-1'>
      <MainLogo className="w-12 fill-black"/>
      <MainLogoText className="w-14 fill-black"/>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/pingo700.png" alt="@pingo700" />
              <AvatarFallback>KB</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <Label className="font-bold">Kauã Bastos</Label>
              <Label className="text-sm">Developer</Label>
            </div>
          </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User size={20} />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-red-500 hover:text-white">
            <SignOut size={20} />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    </header>
    <main className="flex flex-row">
    <ScrollArea className="h-[70vh] w-72 border-r">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none font-semibold">Menu</h4>
          <div className="hover:underline text-sm flex flex-row gap-2 items-center mb-3">
            <Users size={20} />
              Usuários
            <CaretRight className="ml-auto" size={12}/>
          </div>
          <div className="hover:underline text-sm flex flex-row gap-2 items-center mb-3">
            <Package size={20} />
              Produtos
            <CaretRight className="ml-auto" size={12}/>
          </div>
          <div className="hover:underline text-sm flex flex-row gap-2 items-center mb-3">
            <ClipboardText size={20} />
              Pedidos
            <CaretRight className="ml-auto" size={12}/>
          </div>
      </div>
    </ScrollArea>
    <div className="m-4 flex flex-col w-[80vw]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/menu">Menu</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Produtos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
        <Products></Products>
    </div>
    </main>
    </>
  );
}
