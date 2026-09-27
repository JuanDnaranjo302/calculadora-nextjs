import { ISidebarLink } from "@/src/Common/components/SideBar";

export const ADMIN_LINKS: ISidebarLink[] = [
	{ name: "Inicio", href: "/view/Admin/Dashboard", icon: "home" },
	{ name: "Usuarios", href: "/view/Admin/Usuarios", icon: "users" },
	{ name: "Categorías", href: "/view/Admin/Categorias", icon: "grid" },
	{ name: "Productos", href: "/view/Admin/Productos", icon: "package" },
	{ name: "Pedidos", href: "/view/Admin/Pedidos", icon: "clipboardList" },
	{ name: "Facturación", href: "/view/Admin/Facturacion", icon: "receipt" },
];
