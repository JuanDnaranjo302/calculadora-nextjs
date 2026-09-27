"use client";

import { useSalesSummary } from "@/src/Common/Hooks/useSalesSummary";
import SectionPanel from "@/src/Common/components/SectionPanel";
import { RenderIcon } from "@/src/Common/components/RenderIcon";

export interface SalesSummaryItemData {
	id: string;
	icon: string;
	value: string;
	label: string;
	iconBgColor: string;
	iconColor: string;
}

type Period = "Día" | "Semana" | "Mes";

interface ISalesSummaryProps {
	dataByPeriod: Record<Period, SalesSummaryItemData[]>;
}

const PERIODS: Period[] = ["Día", "Semana", "Mes"];

export default function SalesSummary({ dataByPeriod }: ISalesSummaryProps) {
	const [period, setPeriod] = useSalesSummary();
	const items = dataByPeriod[period];

	return (
		<SectionPanel
			title="Resumen de ventas"
			action={
				<div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
					{PERIODS.map((p) => (
						<button
							key={p}
							onClick={() => setPeriod(p)}
							className={`text-xs px-3 py-1 rounded-full transition-colors ${
								period === p
									? "bg-white text-foreground shadow-sm font-medium"
									: "text-gray-400"
							}`}
						>
							{p}
						</button>
					))}
				</div>
			}
		>
			<div className="flex flex-col gap-3">
				{items.map((item) => (
					<div
						key={item.id}
						className="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3"
					>
						<div
							className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.iconBgColor} ${item.iconColor}`}
						>
							<RenderIcon icon={item.icon} size={18} />
						</div>

						<div className="flex-1 flex flex-col min-w-0">
							<span className="font-bold text-lg leading-none">
								{item.value}
							</span>
							<span className="text-xs text-gray-400 mt-1">
								{item.label}
							</span>
						</div>

						<RenderIcon icon="chevronRight" size={16} />
					</div>
				))}
			</div>
		</SectionPanel>
	);
}
