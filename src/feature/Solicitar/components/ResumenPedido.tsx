import Image from "next/image";
import SectionPanel from "@/src/Common/components/SectionPanel";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import type { ItemCarrito } from "@/src/Common/Types";
import { formatCurrency } from "@/src/Common/Utils/formatCurrency";

export type { ItemCarrito };

interface IResumenPedidoProps {
	items: ItemCarrito[];
	onIncrementar: (id: string) => void;
	onDecrementar: (id: string) => void;
	onFinalizar: () => void;
}

export default function ResumenPedido({
	items,
	onIncrementar,
	onDecrementar,
	onFinalizar,
}: IResumenPedidoProps) {
	const cantidadTotal = items.reduce((sum, item) => sum + item.cantidad, 0);
	const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

	return (
		<SectionPanel title="Resumen del Pedido" className="text-black">
			{items.length === 0 ? (
				<p className="text-sm text-gray-400">
					Aún no has agregado productos.
				</p>
			) : (
				<div className="flex flex-col gap-4">
					{items.map((item) => (
						<div key={item.id} className="flex items-center gap-3">
							<div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0">
								<Image
									src={item.imagen}
									alt={item.nombre}
									fill
									className="object-cover"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<span className="text-sm font-medium text-black block truncate">
									{item.nombre}
								</span>
								<span className="text-xs text-gray-400">
									{formatCurrency(item.precio, "USD", "en-US")} c/u
								</span>
							</div>
							<div className="flex items-center gap-2 shrink-0">
								<button
									onClick={() => onDecrementar(item.id)}
									className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
								>
									−
								</button>
								<span className="text-sm font-medium w-4 text-center text-navy">
									{item.cantidad}
								</span>
								<button
									onClick={() => onIncrementar(item.id)}
									className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center"
								>
									+
								</button>
							</div>
						</div>
					))}

					<div className="border-t border-gray-100 pt-3 flex flex-col gap-1">
						<div className="flex items-center justify-between text-sm text-gray-500">
							<span>Cantidad de productos</span>
							<span>{cantidadTotal}</span>
						</div>
						<div className="flex items-center justify-between font-bold text-black">
							<span>Total</span>
							<span>{formatCurrency(total, "USD", "en-US")}</span>
						</div>
					</div>

					<button
						onClick={onFinalizar}
						className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-medium py-3 rounded-xl"
					>
						Finalizar Pedido
					</button>
				</div>
			)}
		</SectionPanel>
	);
}
