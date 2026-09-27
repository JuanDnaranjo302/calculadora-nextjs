import { RenderIcon } from "@/src/Common/components/RenderIcon";

export interface FacturacionResumenData {
	facturasDelDia: number;
	totalFacturado: string;
	fechaReporte: string;
}

interface IFacturacionResumenCardsProps {
	data: FacturacionResumenData;
}

const STATS = [
	{
		key: "facturasDelDia" as const,
		label: "Facturas del día",
		icon: "receipt",
		iconBg: "bg-emerald-50",
		iconColor: "#10b981",
	},
	{
		key: "totalFacturado" as const,
		label: "Total facturado",
		icon: "dollar",
		iconBg: "bg-blue-50",
		iconColor: "#3b82f6",
	},
	{
		key: "fechaReporte" as const,
		label: "Fecha del reporte",
		icon: "calendar",
		iconBg: "bg-orange-50",
		iconColor: "#f97316",
	},
];

export default function FacturacionCards({
	data,
}: IFacturacionResumenCardsProps) {
	return (
		<div className="grid grid-cols-3 gap-4 w-full">
			{STATS.map((stat) => (
				<div
					key={stat.key}
					className="flex items-center gap-3 bg-white rounded-2xl p-4 w-full shadow-sm"
				>
					<div
						className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${stat.iconBg}`}
					>
						<RenderIcon icon={stat.icon} size={16} color={stat.iconColor} />
					</div>
					<div className="flex flex-col min-w-0">
						<span className="font-bold text-lg leading-none text-navy">
							{data[stat.key]}
						</span>
						<span className="text-xs text-gray-400 mt-1 truncate">
							{stat.label}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
