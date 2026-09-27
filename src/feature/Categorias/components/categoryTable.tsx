import DataTable, { IColumn } from "@/src/Common/components/DataTable";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import type { Category } from "@/src/Common/Types";

export type { Category };

interface ICategoryTableProps {
	categorias: Category[];
	onEdit?: (categoria: Category) => void;
	onDelete?: (categoria: Category) => void;
}

export default function CategoryTable({
	categorias,
	onEdit,
	onDelete,
}: ICategoryTableProps) {
	const columns: IColumn<Category>[] = [
		{
			header: "ID",
			accessor: (_row, index) => (
				<span className="text-gray-400">#{index + 1}</span>
			),
		},
		{
			header: "Nombre",
			accessor: (row) => <span className="font-medium">{row.nombre}</span>,
		},
		{
			header: "Estado",
			accessor: (row) => (
				<span
					className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
						row.activo
							? "bg-emerald-50 text-emerald-600"
							: "bg-gray-100 text-gray-400"
					}`}
				>
					<span
						className={`w-1.5 h-1.5 rounded-full ${
							row.activo ? "bg-emerald-500" : "bg-gray-400"
						}`}
					/>
					{row.activo ? "Activo" : "Inactivo"}
				</span>
			),
		},
		{
			header: "Acciones",
			accessor: (row) => (
				<div className="flex items-center gap-3">
					<button onClick={() => onEdit?.(row)}>
						<RenderIcon icon="edit" size={16} color="#9ca3af" />
					</button>
					<button onClick={() => onDelete?.(row)}>
						<RenderIcon icon="trash" size={16} color="#9ca3af" />
					</button>
				</div>
			),
			className: "text-right",
		},
	];
	return (
		<DataTable
			columns={columns}
			data={categorias}
			rowKey={(row) => row.id}
		/>
	);
}
