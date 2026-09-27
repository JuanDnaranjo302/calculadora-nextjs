import DataTable, { IColumn } from "@/src/Common/components/DataTable";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import type { Usuario } from "@/src/Common/Types";
import { getInitials } from "@/src/Common/Utils/getInitials";

export type { Usuario };
interface IUsuariosTableProps {
	usuarios: Usuario[];
	onEdit?: (usuario: Usuario) => void;
	onDelete?: (usuario: Usuario) => void;
}

const ROL_STYLES: Record<Usuario["rol"], string> = {
	administrador: "bg-purple-50 text-purple-500",
	administrativo: "bg-teal-50 text-teal-500",
	mensajero: "bg-yellow-50 text-yellow-600",
};

const ROL_LABEL: Record<Usuario["rol"], string> = {
	administrador: "Administrador",
	administrativo: "Administrativo",
	mensajero: "Mensajero",
};

export default function UsuariosTable({
	usuarios,
	onEdit,
	onDelete,
}: IUsuariosTableProps) {
    const columns: IColumn<Usuario>[] = [
	{
		header: "ID",
		accessor: (_row, index) => (
			<span className="text-gray-500">#{index + 1}</span>
		),
		className: "w-16",
	},
	{
		header: "Nombre",
		accessor: (row) => (
			<div className="flex items-center gap-2">
				<span aria-label={row.nombre} className="flex size-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800">{getInitials(row.nombre)}</span>
				<span className="font-medium">{row.nombre}</span>
			</div>
		),
		className: "w-1/5",
	},
	{
		header: "Email",
		accessor: (row) => (
			<span className="text-gray-500">{row.email}</span>
		),
		className: "w-1/4",
	},
	{
		header: "Rol",
		accessor: (row) => (
			<span
				className={`text-xs font-medium px-2.5 py-1 rounded-full ${ROL_STYLES[row.rol]}`}
			>
				{ROL_LABEL[row.rol]}
			</span>
		),
		className: "w-30",
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
		className: "w-32",
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
		className: "w-24 text-right",
	},
];
	return (
		<DataTable
			columns={columns}
			data={usuarios}
			rowKey={(row) => row.id}
		/>
	);
}
