import { ISidebarLink } from "@/src/Common/components/SideBar";
 
export const CLIENTE_LINKS: ISidebarLink[] = [
	{ name: "Inicio", href: "/view/User/Inicio", icon: "grid" },
	{ name: "Solicitar", href: "/view/User/Solicitar", icon: "package" },
	{ name: "Últimos pedidos", href: "/view/User/Pedidos", icon: "clipboardList" },
	{ name: "Notificaciones", href: "/view/User/Notificaciones", icon: "bell", badge: 2 },
];