"use client";
import { Avatar } from "@heroui/react";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import SectionPanel from "@/src/Common/components/SectionPanel";
import { getInitials } from "@/src/Common/Utils/getInitials";

interface ITopNavClienteProps {
	nombre: string;
	rol?: string;
	notificaciones?: number;
}

export default function TopNavCliente({
	nombre,
	rol = "Cliente",
	notificaciones = 0,
}: ITopNavClienteProps) {
	return (
		<SectionPanel
			size="sm"
			noPadding
			className="rounded-none shadow-sm border-b border-gray-100 overflow-visible bg-[#c7ddcc]"
			bodyClassName="flex items-center justify-between h-16 w-full px-6"
		>
			{/* Marca */}
			<div className="flex items-center gap-2">
				<div className="p-3 border border-black rounded-xl bg-navy">
					<RenderIcon icon="cup" size={16} />
				</div>
				<p className="font-bold text-navy text-lg">Café Aroma</p>
			</div>

			{/* Lado derecho */}
			<div className="flex items-center gap-4">
				<button className="relative">
					<RenderIcon icon="bell" size={20} color="#6b7280" />
					{notificaciones > 0 && (
						<span className="absolute -top-1.5 -right-1.5 text-[10px] font-semibold bg-emerald-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
							{notificaciones}
						</span>
					)}
				</button>

				<div className="flex items-center gap-2">
					<Avatar size="sm" className="ring-2 ring-gray-200 rounded-full">
						<Avatar.Fallback>{getInitials(nombre)}</Avatar.Fallback>
					</Avatar>
					<div className="flex flex-col text-sm">
						<span className="font-semibold leading-none text-black">
							{nombre}
						</span>
						<span className="text-xs text-gray-400 mt-0.5">{rol}</span>
					</div>
				</div>
			</div>
		</SectionPanel>
	);
}
