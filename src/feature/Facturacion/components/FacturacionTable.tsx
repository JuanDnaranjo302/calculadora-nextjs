import DataTable, { IColumn } from "@/src/Common/components/DataTable";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import FacturaDetalle from "./FacturaDetalle";

export interface Factura {
	id: string;
	numeroOrden: string;
	fecha: string;
	cliente: string;
	ubicacion: string;
	valor: string;
	estado: "entregado" | "pendiente" | "cancelado";
	clienteEmail?: string;
	productos?: { nombre: string; cantidad: number; precio: string; subtotal: string }[];
}

interface IFacturacionTableProps {
	facturas: Factura[];
	onVerDetalles?: (factura: Factura) => void;
}

const ESTADO_STYLES: Record<Factura["estado"], string> = {
	entregado: "bg-emerald-50 text-emerald-600",
	pendiente: "bg-blue-50 text-blue-500",
	cancelado: "bg-red-50 text-red-500",
};

const ESTADO_LABEL: Record<Factura["estado"], string> = {
	entregado: "Entregado",
	pendiente: "Pendiente",
	cancelado: "Cancelado",
};

export default function FacturacionTable({
	facturas,
	onVerDetalles,
}: IFacturacionTableProps) {
	const columns: IColumn<Factura>[] = [
		{
			header: "ID Orden",
			accessor: (row) => (
				<span className="text-gray-400">#{row.numeroOrden}</span>
			),
			className: "w-28",
		},
		{
			header: "Fecha",
			accessor: (row) => <span className="text-gray-500">{row.fecha}</span>,
			className: "w-40",
		},
		{
			header: "Cliente",
			accessor: (row) => <span className="font-medium">{row.cliente}</span>,
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
			accessor: (row) => <span className="font-medium">{row.valor}</span>,
			className: "w-24",
		},
		{
			header: "Estado",
			accessor: (row) => (
				<span
					className={`text-xs font-medium px-2.5 py-1 rounded-full ${ESTADO_STYLES[row.estado]}`}
				>
					{ESTADO_LABEL[row.estado]}
				</span>
			),
			className: "w-32",
		},
		{
			header: "Detalles",
			accessor: (row) => (
				<FacturaDetalle
					factura={row}
					trigger={<button type="button" onClick={() => onVerDetalles?.(row)} className="ml-auto flex items-center gap-1 text-xs font-medium text-navy"><RenderIcon icon="eye" size={14} color="#16123f" />Ver detalles</button>}
				/>
			),
			className: "text-right",
		},
	];

	return (
		<DataTable
			columns={columns}
			data={facturas}
			rowKey={(row) => row.id}
		/>
	);
}
