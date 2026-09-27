"use client";
import { Button, Modal } from "@heroui/react";
import type { Pedido } from "./PedidosTable";

interface PedidoDetalleProps {
	trigger: React.ReactNode;
	pedido: Pedido;
}

export default function PedidoDetalle({ trigger, pedido }: PedidoDetalleProps) {
	return (
		<Modal>
			{trigger}
			<Modal.Backdrop>
				<Modal.Container>
					<Modal.Dialog className="w-[34rem] max-w-[calc(100vw-2rem)] text-black">
						<Modal.CloseTrigger />
						<Modal.Header><Modal.Heading className="text-navy">Pedido #{pedido.numeroOrden}</Modal.Heading></Modal.Header>
						<Modal.Body>
							<div className="flex items-center justify-between text-sm">
								<span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">{pedido.estado[0].toUpperCase() + pedido.estado.slice(1)}</span>
								<time className="text-gray-500">{pedido.fecha}</time>
							</div>
							<div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 text-sm">
								<div><p className="text-xs uppercase text-gray-400">Cliente</p><p className="font-medium">{pedido.cliente}</p></div>
								<div><p className="text-xs uppercase text-gray-400">Ubicación</p><p className="text-gray-600">{pedido.ubicacion}</p></div>
							</div>
							<div><h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Productos del pedido</h3>
								{pedido.productos?.length ? <ul className="divide-y rounded-xl border border-gray-100 px-3">{pedido.productos.map((producto, index) => <li key={`${producto.nombre}-${index}`} className="flex justify-between gap-3 py-2 text-sm"><div><p className="font-medium">{producto.nombre}</p><p className="text-xs text-gray-400">{producto.cantidad} x {producto.precio}</p></div><span className="font-semibold">{producto.subtotal}</span></li>)}</ul> : <p className="rounded-xl border border-gray-100 p-3 text-sm text-gray-500">No hay productos detallados para este pedido.</p>}
							</div>
							<div className="flex justify-between rounded-xl bg-emerald-50 p-3 font-semibold text-navy"><span>Total del pedido</span><span>{pedido.valor}</span></div>
						</Modal.Body>
						<Modal.Footer><Button slot="close" variant="outline">Cerrar</Button></Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
