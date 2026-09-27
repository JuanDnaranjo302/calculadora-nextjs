"use client";
import Image from "next/image";
import { Modal, Button, Input, Label, ListBox, Select, TextArea } from "@heroui/react";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import { useEditProductForm } from "@/src/Common/Hooks/useProductForm";

export interface EditarProductoData {
	id: string;
	categoria: string;
	nombre: string;
	descripcion: string;
	precio: number;
	stock: number;
	estado: "activo" | "inactivo";
	imagen: string;
}

interface IEditarProductoProps {
	trigger: React.ReactNode;
	producto: EditarProductoData;
	categorias: string[];
	onGuardar: (data: EditarProductoData) => void;
}

export default function EditarProducto({
	trigger,
	producto,
	categorias,
	onGuardar,
}: IEditarProductoProps) {
	const { nombre, setNombre, descripcion, setDescripcion, precio, setPrecio, stock, setStock, imagenUrl, setImagenUrl } = useEditProductForm(producto);

	const handleGuardar = () => {
		onGuardar({
			...producto,
			nombre,
			descripcion,
			precio: Number(precio),
			stock: Number(stock),
			imagen: imagenUrl,
		});
	};

	return (
		<Modal>
			{trigger}
			<Modal.Backdrop>
				<Modal.Container>
					<Modal.Dialog className="w-120 text-black">
						<Modal.CloseTrigger />
						<Modal.Header>
							<Modal.Heading>Editar Producto</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<div className="flex flex-col gap-4">
								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-1">
										<Select className="w-full" placeholder={producto.categoria}>
											<Label className="text-sm font-medium">Categoría</Label>
											<Select.Trigger className="w-full flex items-center justify-between">
												<Select.Value className="w-full flex-1 text-left" />
												<Select.Indicator />
											</Select.Trigger>
											<Select.Popover>
												<ListBox className="text-black">
													{categorias.map((cat) => (
														<ListBox.Item key={cat} id={cat} textValue={cat}>
															{cat}
															<ListBox.ItemIndicator />
														</ListBox.Item>
													))}
												</ListBox>
											</Select.Popover>
										</Select>
									</div>

									<div className="flex flex-col gap-1">
										<Label className="text-sm font-medium">Nombre</Label>
										<Input
											value={nombre}
											onChange={(e) => setNombre(e.target.value)}
										/>
									</div>
								</div>

								<div className="flex flex-col gap-1">
									<Label className="text-sm font-medium">Descripción</Label>
									<TextArea
										fullWidth
										rows={2}
										value={descripcion}
										onChange={(e) => setDescripcion(e.target.value)}
									/>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-1">
										<Label className="text-sm font-medium">Precio (COP)</Label>
										<Input
											type="number"
											value={precio}
											onChange={(e) => setPrecio(e.target.value)}
										/>
									</div>
									<div className="flex flex-col gap-1">
										<Label className="text-sm font-medium">Stock</Label>
										<Input
											type="number"
											value={stock}
											onChange={(e) => setStock(e.target.value)}
										/>
									</div>
								</div>

								<div className="flex flex-col gap-1">
									<Select className="w-full" placeholder="Activo">
										<Label className="text-sm font-medium">Estado</Label>
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

								<div className="flex flex-col gap-1">
									<Label className="text-sm font-medium">
										Imagen del producto
									</Label>
									<div className="flex items-center gap-3">
										{imagenUrl && (
											<div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
												<Image
													src={imagenUrl}
													alt={nombre}
													fill
													className="object-cover"
												/>
											</div>
										)}
										<label className="flex-1 flex flex-col items-center justify-center gap-1 border border-dashed border-gray-300 rounded-xl py-3 cursor-pointer text-gray-400">
											<RenderIcon icon="upload" size={16} color="#9ca3af" />
											<span className="text-xs">
												Haz clic para subir una imagen
											</span>
											<input type="file" accept="image/*" className="hidden" />
										</label>
									</div>
									<Input
										className="mt-1 text-xs"
										value={imagenUrl}
										onChange={(e) => setImagenUrl(e.target.value)}
										placeholder="https://..."
									/>
								</div>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button slot="close" variant="ghost">
								Cancelar
							</Button>
							<Button
								className="bg-navy text-white"
								onPress={handleGuardar}
								slot="close"
							>
								Guardar Cambios
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
