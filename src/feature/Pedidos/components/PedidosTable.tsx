import DataTable, { IColumn } from "@/src/Common/components/DataTable";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import PedidoConfirmacion from "./PedidoConfirmacion";
import PedidoDetalle from "./PedidoDetalle";
import type { Pedido } from "@/src/Common/Types";

export type { Pedido };

interface IPedidosTableProps {
	pedidos: Pedido[];
	onAceptar?: (pedido: Pedido) => void;
	onRechazar?: (pedido: Pedido) => void;
	onVer?: (pedido: Pedido) => void;
}

const ESTADO_STYLES: Record<Pedido["estado"], string> = {
	solicitado: "bg-yellow-50 text-yellow-600",
	pendiente: "bg-blue-50 text-blue-500",
	entregado: "bg-emerald-50 text-emerald-600",
	cancelado: "bg-red-50 text-red-500",
};

const ESTADO_LABEL: Record<Pedido["estado"], string> = {
	solicitado: "Solicitado",
	pendiente: "Pendiente",
	entregado: "Entregado",
	cancelado: "Cancelado",
};

export default function PedidosTable({
	pedidos,
	onAceptar,
	onRechazar,
	onVer,
}: IPedidosTableProps) {
	const columns: IColumn<Pedido>[] = [
		{
			header: "ID-Orden",
			accessor: (row) => (
				<span className="text-gray-400">#{row.numeroOrden}</span>
			),
			className: "w-32",
		},
		{
			header: "Fecha",
			accessor: (row) => (
				<span className="text-gray-500">{row.fecha}</span>
			),
			className: "w-40",
		},
		{
			header: "Cliente",
			accessor: (row) => (
				<span className="font-medium">{row.cliente}</span>
			),
			className: "w-40",
		},
		{
			header: "Ubicación",
			accessor: (row) => (
				<div className="flex items-center gap-1 text-gray-500">
					<RenderIcon icon="mapPin" size={14} color="#9ca3af" />
					<span className="truncate max-w-45">{row.ubicacion}</span>
				</div>
			),
			className: "w-56",
		},
		{
			header: "Valor",
			accessor: (row) => (
				<span className="font-medium">{row.valor}</span>
			),
			className: "w-35",
		},
		{
			header: "Estado",
			accessor: (row) => (
				<span
					className={`text-xs font-medium px-1.5 py-1 rounded-full ${ESTADO_STYLES[row.estado]}`}
				>
					{ESTADO_LABEL[row.estado]}
				</span>
			),
			className: "w-32",
		},
		{
			header: "Opciones",
			accessor: (row) => (
				<div className="flex items-center justify-end gap-3">
					{row.estado === "solicitado" && (
						<>
							<PedidoConfirmacion
								pedido={row}
								action="aceptar"
								onConfirm={(pedido) => onAceptar?.(pedido)}
								trigger={<button type="button" className="flex items-center gap-1 text-xs font-medium text-navy"><RenderIcon icon="check" size={14} color="#16123f" />Aceptar</button>}
							/>
							<PedidoConfirmacion
								pedido={row}
								action="rechazar"
								onConfirm={(pedido) => onRechazar?.(pedido)}
								trigger={<button type="button" className="flex items-center gap-1 text-xs font-medium text-red-500"><RenderIcon icon="x" size={14} color="#ef4444" />Rechazar</button>}
							/>
						</>
					)}
					<PedidoDetalle
						pedido={row}
						trigger={<button type="button" onClick={() => onVer?.(row)} className="flex items-center gap-1 text-xs font-medium text-gray-500"><RenderIcon icon="eye" size={14} color="#6b7280" />Ver</button>}
					/>
				</div>
			),
			className: "text-right",
		},
	];
	return (
		<DataTable
			columns={columns}
			data={pedidos}
			rowKey={(row) => row.id}
		/>
	);
}
