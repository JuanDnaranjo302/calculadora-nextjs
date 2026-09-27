"use client";
import { Button, Modal } from "@heroui/react";
import type { Pedido } from "./PedidosTable";

interface PedidoConfirmacionProps {
	trigger: React.ReactNode;
	pedido: Pedido;
	action: "aceptar" | "rechazar";
	onConfirm: (pedido: Pedido) => void;
}

export default function PedidoConfirmacion({ trigger, pedido, action, onConfirm }: PedidoConfirmacionProps) {
	const aceptar = action === "aceptar";
	return (
		<Modal>
			{trigger}
			<Modal.Backdrop>
				<Modal.Container>
					<Modal.Dialog className="w-136 max-w-[calc(100vw-2rem)] text-black">
						<Modal.CloseTrigger />
						<Modal.Header><Modal.Heading className="text-navy">{aceptar ? "Aceptar Pedido" : "Rechazar Pedido"}</Modal.Heading></Modal.Header>
						<Modal.Body>
							<p className="text-gray-500">
								¿Confirmas que deseas <strong className={aceptar ? "text-navy" : "text-red-600"}>{aceptar ? "aceptar" : "rechazar"}</strong> el pedido <strong className="text-gray-800">#{pedido.numeroOrden}</strong>? El estado cambiará a <strong className="text-gray-800">{aceptar ? "Pendiente" : "Cancelado"}</strong>.
							</p>
						</Modal.Body>
						<Modal.Footer className="bg-gray-50">
							<Button slot="close" variant="outline">Cancelar</Button>
							<Button className={aceptar ? "bg-navy text-white" : "bg-red-600 text-white"} onPress={() => onConfirm(pedido)} slot="close">{aceptar ? "Aceptar" : "Rechazar"}</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
