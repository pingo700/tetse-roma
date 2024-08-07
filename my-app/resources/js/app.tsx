/* shadcn/ui */
import { Toaster } from "sonner"
import { Sidebar } from "@/Components/ui/sidebar"
import { Input } from "@/Components/ui/input"
import { SheetMenu } from "@/Components/ui/sheet-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

/* app components */
import ItemComponent from "@/Components/item-component"
import { ShoppingCart } from "@/Components/shopping-cart";

/* brand logos */
import { ReactComponent as LogoMuRata } from "../assets/logos/muRata-Logo.svg";
import { ReactComponent as LogoPanasonic } from "../assets/logos/Panasonic-Logo.svg";
import { ReactComponent as LogoPhilips } from "../assets/logos/Philips-Logo.svg";
import { ReactComponent as LogoEnergizer } from "../assets/logos/Energizer-Logo.svg";
import { ReactComponent as LogoMaxell } from "../assets/logos/Maxell-Logo.svg";
import { ReactComponent as LogoRenata } from "../assets/logos/renataBatterias-Logo.svg";


import MuRataBatteryImg from '../assets/batteries/murata.png'; 
import EnergizerBatteryImg from '../assets/batteries/energizer.png';

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

/* Main Logo */
import { ReactComponent as MainLogo } from '../assets/MainLogo.svg';
import { ReactComponent as MainLogoText } from '../assets/MainLogoText.svg';

import { User, SignOut } from "@phosphor-icons/react";


export function App() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  if (!sidebar) return null;

  return (
    <>
      <Sidebar MainLogo={MainLogo} MainLogoText={MainLogoText} />
      <Toaster richColors toastOptions={{}} closeButton/>
      <header
              className={cn(
                "min-h-[calc(100vh_-_56px) transition-[margin-left] ease-in-out duration-300 border sticky top-0 z-10 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between p-2 sm:pl-8 gap-2 sm:gap-6 items-center",
                sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
              )}>
        <SheetMenu />
        <Input type="search" placeholder="Pesquise pelo produto aqui..." className="text-xs sm:text-base"/>
        <div className="flex flex-row gap-2 items-center">
          <ShoppingCart />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex flex-row gap-2 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/pingo700.png" alt="@pingo700" />
                  <AvatarFallback>KB</AvatarFallback>
                </Avatar>
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
        </div>
      </header>
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px) transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <div className="flex flex-col gap-4 px-4">
            <h1 className="text-2xl font-semibold">Pilhas e Baterias</h1>
            <div className="flex flex-col items-center gap-4">
            <ItemComponent Id={"Energizer"} BrandLogo={LogoEnergizer} BatteryImg={EnergizerBatteryImg} Price={22} />
            <ItemComponent Id={"Panasonic"} BrandLogo={LogoPanasonic} BatteryImg={MuRataBatteryImg} Price={220.28} />
            <ItemComponent Id={"Philips"} BrandLogo={LogoPhilips} BatteryImg={MuRataBatteryImg} Price={220.28} />
            <ItemComponent Id={"Maxell"} BrandLogo={LogoMaxell} BatteryImg={MuRataBatteryImg} Price={220.28} />
            <ItemComponent Id={"MuRata"} BrandLogo={LogoMuRata} BatteryImg={MuRataBatteryImg} Price={220.28} />
            <ItemComponent Id={"Renata"} BrandLogo={LogoRenata} BatteryImg={MuRataBatteryImg} Price={220.28} />
            </div>
        </div>
      </main>
    </>
  )
}
