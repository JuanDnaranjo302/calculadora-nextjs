import { Card } from "@heroui/react";
import { RenderIcon } from "@/src/Common/components/RenderIcon";

export interface PedidosResumenData {
	total: number;
	entregados: number;
	pendientes: number;
	cancelados: number;
}

interface IPedidosResumenCardsProps {
	data: PedidosResumenData;
}
const STATS = [
	{
		key: "total" as const,
		label: "Total Pedidos",
		icon: "clipboardList",
		iconBg: "bg-purple-50",
		iconColor: "#a855f7",
	},
	{
		key: "entregados" as const,
		label: "Entregados",
		icon: "check",
		iconBg: "bg-emerald-50",
		iconColor: "#10b981",
	},
	{
		key: "pendientes" as const,
		label: "Pendientes",
		icon: "clock",
		iconBg: "bg-blue-50",
		iconColor: "#3b82f6",
	},
	{
		key: "cancelados" as const,
		label: "Cancelados",
		icon: "x",
		iconBg: "bg-red-50",
		iconColor: "#ef4444",
	},
];

export default function PedidosCard({ data }: IPedidosResumenCardsProps) {
	return (
		<div className="grid grid-cols-4 gap-4">
			{STATS.map((stat) => (
				<Card key={stat.key} className="flex flex-row items-center gap-3 p-4">
					<div
						className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${stat.iconBg}`}
					>
						<RenderIcon icon={stat.icon} size={16} color={stat.iconColor} />
					</div>
					<div className="flex flex-col">
						<span className="font-bold text-lg leading-none text-navy">
							{data[stat.key]}
						</span>
						<span className="text-xs text-gray-400 mt-1">{stat.label}</span>
					</div>
				</Card>
			))}
		</div>
	);
}
