"use client";
import TopNavUser from "@/src/Common/components/TopNavUser";
import Sidebar from "@/src/Common/components/SideBar";
import Title from "@/src/Common/components/title";
import SectionPanel from "@/src/Common/components/SectionPanel";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import { CLIENTE_LINKS } from "@/src/Common/Constants/UserPage";

const STATS = [
	{
		key: "total" as const,
		label: "Pedidos totales",
		icon: "clipboardList",
		iconBg: "bg-blue-100",
		iconColor: "#3b82f6",
	},
	{
		key: "pendientes" as const,
		label: "Pendientes",
		icon: "clock",
		iconBg: "bg-yellow-100",
		iconColor: "#eab308",
	},
	{
		key: "entregados" as const,
		label: "Entregados",
		icon: "check",
		iconBg: "bg-emerald-100",
		iconColor: "#10b981",
	},
	{
		key: "cancelados" as const,
		label: "Cancelados",
		icon: "x",
		iconBg: "bg-gray-100",
		iconColor: "#9ca3af",
	},
];

interface IClienteInicioData {
	total: number;
	pendientes: number;
	entregados: number;
	cancelados: number;
}

export default function ClienteInicioPage() {
	// Data vacía por ahora, lista para conectar con Prisma
	const data: IClienteInicioData = {
		total: 0,
		pendientes: 0,
		entregados: 0,
		cancelados: 0,
	};

	return (
		<div className="bg-[#c7ddcc] min-h-screen w-full overflow-x-hidden">
			<TopNavUser nombre="María Anderson" rol="Cliente" notificaciones={2} />

			<div className="flex gap-3 p-3">
				<div className="w-64 shrink-0">
					<Sidebar links={CLIENTE_LINKS} logoutHref="/view/Login" />
				</div>

				<div className="flex-1 flex flex-col gap-4">
					<div className="text-navy">
						<Title
							title="Panel Principal"
							descripcion="Resumen de tu actividad en Café Aroma."
						/>
					</div>

					<div className="grid grid-cols-4 gap-4">
						{STATS.map((stat) => (
							<div
								key={stat.key}
								className="flex flex-col gap-3 bg-white rounded-2xl p-4 shadow-sm"
							>
								<div
									className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.iconBg}`}
								>
									<RenderIcon icon={stat.icon} size={16} color={stat.iconColor} />
								</div>
								<div className="flex flex-col">
									<span className="font-bold text-2xl leading-none text-navy">
										{data[stat.key]}
									</span>
									<span className="text-xs text-gray-400 mt-1">
										{stat.label}
									</span>
								</div>
							</div>
						))}
					</div>

					<SectionPanel>
						<div className="flex flex-col gap-3">
							<div>
								<h3 className="font-bold text-black">¿Listo para pedir?</h3>
								<p className="text-sm text-gray-400 mt-1">
									Explora nuestro catálogo y realiza tu pedido en minutos.
								</p>
							</div>
							<button className="w-fit flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition-colors text-white text-sm font-medium px-4 py-2.5 rounded-xl">
								<RenderIcon icon="package" size={16} color="white" />
								Solicitar ahora
							</button>
						</div>
					</SectionPanel>
				</div>
			</div>
		</div>
	);
}
