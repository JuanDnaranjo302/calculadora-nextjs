import Image from "next/image";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import type { SolicitarProducto } from "@/src/Common/Types";
import { formatCurrency } from "@/src/Common/Utils/formatCurrency";

export type Producto = SolicitarProducto;

interface IProductoCardProps {
	producto: Producto;
	onAgregar: (producto: Producto) => void;
}

export default function ProductoCard({ producto, onAgregar }: IProductoCardProps) {
	return (
		<div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
			<div className="relative h-24 w-full shrink-0">
				<Image
					src={producto.imagen}
					alt={producto.nombre}
					fill
					unoptimized
					className="object-cover"
				/>
				{producto.destacado && (
					<span className="absolute top-2 left-2 bg-yellow-400 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
						Top
					</span>
				)}
			</div>
			<div className="flex flex-1 flex-col justify-between gap-2 p-3">
				<span className="text-sm font-medium text-black truncate">
					{producto.nombre}
				</span>
				<div className="flex items-center justify-between">
					<span className="text-sm font-semibold text-navy">
						{formatCurrency(producto.precio, "USD", "en-US")}
					</span>
					<button
						onClick={() => onAgregar(producto)}
						className="flex items-center gap-1 bg-navy text-white text-xs font-medium px-2.5 py-1.5 rounded-lg"
					>
						<RenderIcon icon="plus" size={12} color="white" />
						Agregar
					</button>
				</div>
			</div>
		</div>
	);
}
