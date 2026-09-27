"use client";
import { Button, Modal } from "@heroui/react";

interface DeleteProductProps {
	trigger: React.ReactNode;
	productName: string;
	onConfirm: () => void;
}

export default function DeleteProduct({ trigger, productName, onConfirm }: DeleteProductProps) {
	return (
		<Modal>
			{trigger}
			<Modal.Backdrop>
				<Modal.Container>
					<Modal.Dialog className="w-136 max-w-[calc(100vw-2rem)] text-black">
						<Modal.CloseTrigger />
						<Modal.Header>
							<Modal.Heading>Eliminar Producto</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<p className="text-gray-500">
								¿Estás seguro de que deseas eliminar el producto <strong className="font-semibold text-gray-800">{productName}</strong>? Esta acción no se puede deshacer.
							</p>
						</Modal.Body>
						<Modal.Footer className="bg-gray-50">
							<Button slot="close" variant="outline">Cancelar</Button>
							<Button className="bg-red-600 text-white" onPress={onConfirm} slot="close">Eliminar</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
