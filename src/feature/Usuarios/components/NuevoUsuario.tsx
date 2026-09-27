"use client";
import { Modal, Button, Input, Label, ListBox, Select } from "@heroui/react";
import { useUserForm } from "@/src/Common/Hooks/useUserForm";

export interface NuevoUsuarioData {
	nombreCompleto: string;
	correo: string;
	rol: "administrativo" | "administrador" | "mensajero";
	estado: "activo" | "inactivo";
	contrasena: string;
}

interface INuevoUsuarioProps {
	trigger: React.ReactNode;
	onCrear: (data: NuevoUsuarioData) => void;
}

export default function NuevoUsuario({
	trigger,
	onCrear,
}: INuevoUsuarioProps) {
	const { nombreCompleto, setNombreCompleto, correo, setCorreo, contrasena, setContrasena, confirmarContrasena, setConfirmarContrasena, rol, setRol, estado, setEstado } = useUserForm();

	const handleCrear = () => {
		if (!nombreCompleto.trim() || !correo.trim() || !contrasena || contrasena !== confirmarContrasena) return;
		onCrear({
			nombreCompleto: nombreCompleto.trim(),
			correo: correo.trim(),
			rol,
			estado,
			contrasena,
		});
	};

	return (
		<Modal>
			{trigger}
			<Modal.Backdrop>
				<Modal.Container>
					<Modal.Dialog className="w-110 text-black">
						<Modal.CloseTrigger />
						<Modal.Header>
							<Modal.Heading className="font-semibold text-navy">Nuevo Usuario</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-1">
									<Label className="text-sm font-semibold text-navy">
										Nombre completo
									</Label>
									<Input
										value={nombreCompleto}
										onChange={(e) => setNombreCompleto(e.target.value)}
										placeholder="Ej: Juan Pérez"
									/>
								</div>

								<div className="flex flex-col gap-1">
									<Label className="text-sm font-semibold text-navy">
										Correo electrónico
									</Label>
									<Input
										type="email"
										value={correo}
										onChange={(e) => setCorreo(e.target.value)}
										placeholder="usuario@cafearoma.co"
									/>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-1">
										<Select className="w-full" value={rol} onChange={(value) => setRol(String(value) as NuevoUsuarioData["rol"])}>
											<Label className="text-sm font-semibold text-navy">Rol</Label>
											<Select.Trigger className="w-full flex items-center justify-between">
												<Select.Value className="w-full flex-1 text-left" />
												<Select.Indicator />
											</Select.Trigger>
											<Select.Popover>
												<ListBox className="text-black">
													<ListBox.Item id="administrador" textValue="Administrador">
														Administrador
														<ListBox.ItemIndicator />
													</ListBox.Item>
													<ListBox.Item id="administrativo" textValue="Administrativo">
														Administrativo
														<ListBox.ItemIndicator />
													</ListBox.Item>
													<ListBox.Item id="mensajero" textValue="Mensajero">
														Mensajero
														<ListBox.ItemIndicator />
													</ListBox.Item>
												</ListBox>
											</Select.Popover>
										</Select>
									</div>

									<div className="flex flex-col gap-1">
										<Select className="w-full" value={estado} onChange={(value) => setEstado(String(value) as NuevoUsuarioData["estado"])}>
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

								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-1">
										<Label className="text-sm font-semibold text-navy">Contraseña</Label>
										<Input
											type="password"
											value={contrasena}
											onChange={(e) => setContrasena(e.target.value)}
											placeholder="********"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<Label className="text-sm font-semibold text-navy">
											Confirmar contraseña
										</Label>
										<Input
											type="password"
											value={confirmarContrasena}
											onChange={(e) => setConfirmarContrasena(e.target.value)}
											placeholder="********"
										/>
									</div>
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
								isDisabled={!nombreCompleto.trim() || !correo.trim() || !contrasena || contrasena !== confirmarContrasena}
							>
								Crear Usuario
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
