import { 
  BatteryVerticalFull,
  Gear,
  Toolbox,
  Watch,
  PencilRuler,
  Users
  } from "@phosphor-icons/react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/pilhas-e-baterias",
          label: "Pilhas e Baterias",
          active: pathname.includes("/dashboard"),
          icon: BatteryVerticalFull ,
          submenus: []
        },
        {
          href: "/maquinas-e-pecas",
          label: "Máquinas e Peças",
          active: pathname.includes("/dashboard"),
          icon: Gear,
          submenus: []
        },
        {
          href: "/pulseiras",
          label: "Pulseiras",
          active: pathname.includes("/dashboard"),
          icon: Watch,
          submenus: []
        },
        {
          href: "/ferramentas",
          label: "Ferramentas",
          active: pathname.includes("/dashboard"),
          icon: Toolbox,
          submenus: []
        },
        {
          href: "/acessorios",
          label: "Acessórios",
          active: pathname.includes("/dashboard"),
          icon: PencilRuler,
          submenus: []
        },
      ]
    },
/*      {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Posts",
          active: pathname.includes("/posts"),
          icon: NotePencil,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
              active: pathname === "/posts"
            },
            {
              href: "/posts/new",
              label: "New Post",
              active: pathname === "/posts/new"
            }
          ]
        },
        {
          href: "/categories",
          label: "Categories",
          active: pathname.includes("/categories"),
          icon: Bookmark,
          submenus: []
        },
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: Tag,
          submenus: []
        }
      ]
    }, */
     {
      groupLabel: "Configurações",
      menus: [
        {
          href: "/users",
          label: "Usuários",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: []
        },
        {
          href: "/account",
          label: "Conta",
          active: pathname.includes("/account"),
          icon: Gear,
          submenus: []
        }
      ]
    }
  ];
}