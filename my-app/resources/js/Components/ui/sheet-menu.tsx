import { MenuIcon } from "lucide-react";

import { ReactComponent as MainLogo } from '../../../assets/MainLogo.svg';
import { ReactComponent as MainLogoText } from '../../../assets/MainLogoText.svg';

import { Button } from "@/Components/ui/button";
import { Menu } from "@/Components/ui/menu";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "@/Components/ui/sheet";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-9 w-16" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-72 px-3 h-full flex flex-col bg-black" side="left" closeBtnColor="white">
        <SheetHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <div className="flex items-center gap-4">
              <MainLogo className="w-[5rem] h-[5rem] mt-5 fill-main"/>
              <MainLogoText className="w-[5rem] h-[5rem] mt-5 fill-main"/>
            </div>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}
