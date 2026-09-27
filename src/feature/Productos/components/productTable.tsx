import DataTable, { IColumn } from "@/src/Common/components/DataTable";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import type { Product } from "@/src/Common/Types";
import EditarProducto from "./EditarProduct";
import DeleteProduct from "./DeleteProduct";

export type { Product };

interface IProductTableProps {
	productos: Product[];
	onEdit?: (producto: Product) => void;
	onDelete?: (producto: Product) => void;
}

const STOCK_BAJO = 20;

export default function productTable({
	productos,
	onEdit,
	onDelete,
}: IProductTableProps) {
	const columns: IColumn<Product>[] = [
		{
			header: "ID",
			accessor: (_row, index) => (
				<span className="text-gray-400">#{index + 1}</span>
			),
			className: "w-16",
		},
		{
			header: "Categoría",
			accessor: (row) => (
				<span className="text-gray-500">{row.categoria}</span>
			),
			className: "w-40",
		},
		{
			header: "Nombre",
			accessor: (row) => (
				<div className="flex items-center gap-2">
					<span className="font-medium">{row.nombre}</span>
				</div>
			),
			className: "w-1/4",
		},
		{
			header: "Precio",
			accessor: (row) => (
				<span className="font-medium">{row.precio}</span>
			),
			className: "w-28",
		},
		{
			header: "Stock",
			accessor: (row) => (
				<span
					className={
						row.stock < STOCK_BAJO
							? "text-orange-500 font-medium"
							: "text-gray-600"
					}
				>
					{row.stock}
				</span>
			),
			className: "w-20",
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
			<EditarProducto
				trigger={
					<button>
						<RenderIcon icon="edit" size={16} color="#9ca3af" />
					</button>
				}
				producto={{
					id: row.id,
					categoria: row.categoria,
					nombre: row.nombre,
					descripcion: "",
					precio: 8500,
					stock: row.stock,
					estado: "activo",
					imagen: row.imagen ?? "",
				}}
				categorias={["Cafés Calientes", "Bebidas Frías", "Postres", "Panadería"]}
				onGuardar={(data) => console.log("Guardar producto:", data)}
			/>
			<DeleteProduct
				productName={row.nombre}
				onConfirm={() => onDelete?.(row)}
				trigger={<button type="button" aria-label={`Eliminar ${row.nombre}`}><RenderIcon icon="trash" size={16} color="#9ca3af" /></button>}
			/>
		</div>
	),
	className: "w-24 text-right",
},
	];
	return (
		<DataTable
			columns={columns}
			data={productos}
			rowKey={(row) => row.id}
		/>
	);
}
