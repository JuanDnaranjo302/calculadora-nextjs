"use client";
import { Modal, Button, Input, Label, ListBox, Select } from "@heroui/react";
import { useCategoryForm } from "@/src/Common/Hooks/useCategoryForm";

export interface NuevaCategoriaData {
	nombre: string;
	estado: "activo" | "inactivo";
}

interface INuevaCategoriaModalProps {
	trigger: React.ReactNode;
	onCrear: (data: NuevaCategoriaData) => void;
}

export default function NuevaCategoriaModal({
	trigger,
	onCrear,
}: INuevaCategoriaModalProps) {
	const { nombre, setNombre, estado, setEstado } = useCategoryForm();

	const handleCrear = () => {
		if (!nombre.trim()) return;
		onCrear({ nombre: nombre.trim(), estado });
	};

	return (
		<Modal>
			{trigger}
			<Modal.Backdrop>
				<Modal.Container>
					<Modal.Dialog className="w-100 text-black">
						<Modal.CloseTrigger />
						<Modal.Header>
							<Modal.Heading className="font-semibold text-navy">Nueva Categoría</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-1">
									<Label className="text-sm font-semibold text-navy">Nombre</Label>
									<Input
										value={nombre}
										onChange={(e) => setNombre(e.target.value)}
										placeholder="Ej: Cafés Calientes"
									/>
								</div>

								<div className="flex flex-col gap-1">
									<Select className="w-full" value={estado} onChange={(value) => setEstado(String(value) as NuevaCategoriaData["estado"])}>
										<Label className="text-sm font-semibold text-navy">Estado</Label>
										<Select.Trigger className="w-full flex items-center justify-between">
											<Select.Value className="w-full flex-1 text-left" />
											<Select.Indicator />
										</Select.Trigger>
										<Select.Popover>
											<ListBox className="text-black">
												<ListBox.Item id="activo" textValue="Activo">
													Activo
													<ListBox.ItemIndicator />
												</ListBox.Item>
												<ListBox.Item id="inactivo" textValue="Inactivo">
													Inactivo
													<ListBox.ItemIndicator />
												</ListBox.Item>
											</ListBox>
										</Select.Popover>
									</Select>
								</div>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button slot="close" variant="ghost">
								Cancelar
							</Button>
							<Button
								className="bg-navy text-white"
								onPress={handleCrear}
								slot="close"
								isDisabled={!nombre.trim()}
							>
								Crear Categoría
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
