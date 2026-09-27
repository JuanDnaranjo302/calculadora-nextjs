"use client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import SectionPanel from "./SectionPanel";
import { ADMIN_LINKS } from "@/src/Common/Constants/AdminPage";
import { getInitials } from "@/src/Common/Utils/getInitials";

export const TopNav = () => {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<SectionPanel
			size="sm"
			noPadding
			className="rounded-none shadow-sm border-b border-gray-100 overflow-visible p-0"
			bodyClassName="flex items-center justify-between  h-16 w-full gap-4 pl-0 pr-8"
		>
			{/* Marca */}
			<div className="flex gap-2 pl-1 ml-0">
				<div className="p-4 border border-black rounded-xl bg-navy">
					<RenderIcon icon="cup" size={18} />
				</div>
				<p className="pt-3 font-bold text-navy text-xl">Café Aroma</p>
			</div>

			{/* Enlaces de navegación */}
			<ul className="hidden sm:flex items-center ">
				{ADMIN_LINKS.map((link) => {
					const isActive = pathname === link.href;
					return (
						<li key={link.href}>
							<Link
								href={link.href}
								className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-colors text-sm font-medium ${
									isActive
										? "bg-navy text-white"
										: "text-gray-500 hover:text-navy hover:bg-gray-50"
								}`}
							>
								<RenderIcon icon={link.icon} size={16} />
								{link.name}
							</Link>
						</li>
					);
				})}
			</ul>
			{/* Lado derecho */}
			<div className="flex items-center gap-2 md:gap-3">
				<div className="flex items-center gap-3">
					<Avatar size="md" className="ring-2 ring-gray-200 rounded-full">
						<Avatar.Fallback>{getInitials("María González")}</Avatar.Fallback>
					</Avatar>
					<div className="hidden md:flex flex-col text-sm">
						<span className=" text-black font-semibold  ">
							María González
						</span>
						<span className="text-xs text-gray-400">Administrador</span>
					</div>
				</div>
				<div className="w-px h-8 bg-gray-200 mx-2 hidden md:block "></div>
				<Button
					variant="ghost"
					className="text-red-500 font-medium hidden md:flex pl-4"
					onPress={() => router.replace("/view/Login")}
				>
					<RenderIcon icon="logOut" size={12} />
					Salir
				</Button>
			</div>
		</SectionPanel>
	);
};
