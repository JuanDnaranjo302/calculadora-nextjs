"use client";
import { Button, Input, Label, ListBox, Modal, Select, TextArea } from "@heroui/react";
import type { EditarProductoData } from "./EditarProduct";
import { useNewProductForm } from "@/src/Common/Hooks/useProductForm";

export type NuevoProductoData = Omit<EditarProductoData, "id">;

interface NuevoProductoProps {
	trigger: React.ReactNode;
	categorias: string[];
	onCrear: (data: NuevoProductoData) => void;
}

export default function NuevoProducto({ trigger, categorias, onCrear }: NuevoProductoProps) {
	const { nombre, setNombre, categoria, setCategoria, descripcion, setDescripcion, precio, setPrecio, stock, setStock, imagen, setImagen, estado, setEstado } = useNewProductForm(categorias);

	const handleCrear = () => {
		if (!nombre.trim() || !categoria || Number(precio) <= 0 || Number(stock) < 0) return;
		onCrear({ categoria, nombre: nombre.trim(), descripcion, precio: Number(precio), stock: Number(stock), estado, imagen });
	};

	return (
		<Modal>
			{trigger}
			<Modal.Backdrop>
				<Modal.Container>
					<Modal.Dialog className="w-120 max-w-[calc(100vw-2rem)] text-black">
						<Modal.CloseTrigger />
						<Modal.Header><Modal.Heading className="text-navy font-semibold">Crear Producto</Modal.Heading></Modal.Header>
						<Modal.Body>
							<div className="flex flex-col gap-4">
								<div className="grid grid-cols-2 gap-4">
									<Select className="w-full" value={categoria} onChange={(value) => setCategoria(String(value))}>
										<Label className="text-sm font-medium text-navy">Categoría</Label><Select.Trigger className="w-full"><Select.Value /><Select.Indicator /></Select.Trigger>
										<Select.Popover><ListBox>{categorias.map((cat) => <ListBox.Item key={cat} id={cat} textValue={cat}>{cat}<ListBox.ItemIndicator /></ListBox.Item>)}</ListBox></Select.Popover>
									</Select>
									<div className="flex flex-col gap-1"><Label className="text-sm font-medium text-navy">Nombre</Label><Input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del producto" /></div>
								</div>
								<div className="flex flex-col gap-1"><Label className="text-sm font-medium text-navy">Descripción</Label><TextArea rows={2} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} /></div>
								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-1"><Label className="text-sm font-medium text-navy">Precio (COP)</Label><Input type="number" min="1" value={precio} onChange={(e) => setPrecio(e.target.value)} /></div>
									<div className="flex flex-col gap-1"><Label className="text-sm font-medium text-navy">Stock</Label><Input type="number" min="0" value={stock} onChange={(e) => setStock(e.target.value)} /></div>
								</div>
								<Select value={estado} onChange={(value) => setEstado(String(value) as NuevoProductoData["estado"])}>
									<Label className="text-sm font-medium text-navy">Estado</Label><Select.Trigger className="w-full"><Select.Value /><Select.Indicator /></Select.Trigger>
									<Select.Popover><ListBox><ListBox.Item id="activo" textValue="Activo">Activo<ListBox.ItemIndicator /></ListBox.Item><ListBox.Item id="inactivo" textValue="Inactivo">Inactivo<ListBox.ItemIndicator /></ListBox.Item></ListBox></Select.Popover>
								</Select>
								<div className="flex flex-col gap-1"><Label className="text-sm font-medium text-navy">Imagen del producto</Label><Input value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="https://..." /></div>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button slot="close" variant="ghost">Cancelar</Button>
							<Button className="bg-navy text-white" onPress={handleCrear} slot="close" isDisabled={!nombre.trim() || !categoria || Number(precio) <= 0 || Number(stock) < 0}>Crear Producto</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
