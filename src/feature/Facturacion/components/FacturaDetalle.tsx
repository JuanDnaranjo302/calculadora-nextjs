"use client";
import { Button, Modal } from "@heroui/react";
import type { Factura } from "./FacturacionTable";

interface FacturaDetalleProps {
	trigger: React.ReactNode;
	factura: Factura;
}

export default function FacturaDetalle({ trigger, factura }: FacturaDetalleProps) {
	const enviarPorCorreo = () => {
		const subject = encodeURIComponent(`Factura #${factura.numeroOrden} - Café Aroma`);
		const body = encodeURIComponent(`Adjunto los detalles de la factura #${factura.numeroOrden} por ${factura.valor}.`);
		window.location.href = `mailto:${factura.clienteEmail ?? ""}?subject=${subject}&body=${body}`;
	};

	return (
		<Modal>
			{trigger}
			<Modal.Backdrop>
				<Modal.Container>
					<Modal.Dialog className="w-[42rem] max-w-[calc(100vw-2rem)] text-black">
						<Modal.CloseTrigger />
						<Modal.Header><Modal.Heading className="text-navy">Factura #{factura.numeroOrden}</Modal.Heading></Modal.Header>
						<Modal.Body>
							<div className="flex items-center justify-between border-b border-gray-100 pb-3">
								<div><p className="font-semibold text-navy">Café Aroma</p><p className="text-xs text-gray-400">NIT: 900.123.456-7 · Pedidos Online</p></div>
								<div className="text-right"><p className="text-sm font-medium">Factura #{factura.numeroOrden}</p><time className="text-xs text-gray-400">{factura.fecha}</time></div>
							</div>
							<div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 text-sm">
								<div><p className="text-xs uppercase text-gray-400">Cliente</p><p className="font-medium">{factura.cliente}</p></div>
								<div><p className="text-xs uppercase text-gray-400">Ubicación de entrega</p><p className="text-gray-600">{factura.ubicacion}</p></div>
							</div>
							<div><h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Detalle de productos</h3>
								{factura.productos?.length ? <div className="overflow-hidden rounded-xl border border-gray-100"><div className="grid grid-cols-[2fr_0.7fr_1fr_1fr] bg-gray-50 px-3 py-2 text-[10px] font-semibold uppercase text-gray-400"><span>Producto</span><span className="text-center">Cantidad</span><span className="text-right">Precio unit.</span><span className="text-right">Subtotal</span></div>{factura.productos.map((producto, index) => <div key={`${producto.nombre}-${index}`} className="grid grid-cols-[2fr_0.7fr_1fr_1fr] border-t border-gray-100 px-3 py-2 text-xs"><span className="font-medium">{producto.nombre}</span><span className="text-center">{producto.cantidad}</span><span className="text-right">{producto.precio}</span><span className="text-right font-semibold">{producto.subtotal}</span></div>)}</div> : <p className="rounded-xl border border-gray-100 p-3 text-sm text-gray-500">No hay productos detallados disponibles para esta factura.</p>}
							</div>
							<div className="flex justify-between rounded-xl bg-[#19143f] p-3 font-semibold text-white"><span>Total a pagar</span><span>{factura.valor}</span></div>
						</Modal.Body>
						<Modal.Footer>
							<Button slot="close" variant="outline">Cerrar</Button>
							<Button variant="outline" onPress={enviarPorCorreo}>✉ Enviar por correo</Button>
							<Button className="bg-navy text-white" onPress={() => window.print()}>Imprimir factura</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
