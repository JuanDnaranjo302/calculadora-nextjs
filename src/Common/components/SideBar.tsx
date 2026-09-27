"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RenderIcon } from "./RenderIcon";
import SectionPanel from "./SectionPanel";

export interface ISidebarLink {
	name: string;
	href: string;
	icon: string;
	badge?: number;
}

interface ISidebarProps {
	links: ISidebarLink[];
	logoutHref?: string;
	onLogout?: () => void;
	className?: string;
}

export default function Sidebar({
	links,
	logoutHref = "/",
	onLogout,
	className = "",
}: ISidebarProps) {
	const pathname = usePathname();
	const router = useRouter();

	const handleLogout = () => {
		onLogout?.();
		router.push(logoutHref);
	};

	return (
		<SectionPanel
			bodyClassName="flex flex-col justify-between h-full"
			className={`h-full bg-[#c7ddcc] ${className}`}
		>
			<ul className="flex flex-col gap-1">
				{links.map((link) => {
					const isActive = pathname === link.href;
					return (
						<li key={link.href}>
							<Link
								href={link.href}
								className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl transition-colors text-sm font-medium ${
									isActive
										? "bg-navy text-white"
										: "text-gray-500 hover:text-navy hover:bg-gray-50"
								}`}
							>
								<span className="flex items-center gap-2">
									<RenderIcon
										icon={link.icon}
										size={16}
										color={isActive ? "white" : "#6b7280"}
									/>
									{link.name}
								</span>
								{!!link.badge && (
									<span className="text-xs font-semibold bg-emerald-100 text-emerald-600 rounded-full w-5 h-5 flex items-center justify-center">
										{link.badge}
									</span>
								)}
							</Link>
						</li>
					);
				})}
			</ul>

			<button
				onClick={handleLogout}
				className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
			>
				<RenderIcon icon="logOut" size={16} color="#ef4444" />
				Cerrar sesión
			</button>
		</SectionPanel>
	);
}
