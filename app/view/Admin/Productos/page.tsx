"use client";

import { useProductos } from "@/src/Common/Hooks/useProductos";
import SectionPanel from "@/src/Common/components/SectionPanel";
import Title from "@/src/Common/components/title";
import { TopNav } from "@/src/Common/components/TopNav";
import { Button, SearchField } from "@heroui/react";
import ProductTable from "@/src/feature/Productos/components/productTable";
import NuevoProducto from "@/src/feature/Productos/components/NuevoProducto";

const CATEGORIAS = ["Cafés Calientes", "Bebidas Frías", "Postres", "Panadería"];

export default function ProductosPage() {
	const { productosFiltrados, busqueda, setBusqueda, crearProducto, eliminarProducto } = useProductos();
	return (
		<div className="min-h-screen w-full overflow-x-hidden bg-[#c7ddcc]">
			<TopNav />
			<div className="flex w-full items-center justify-between p-4 text-black">
				<Title title="Productos" icon="box" color="green" size={35} descripcion="Catálogo de productos de la categoría" />
				<NuevoProducto
					trigger={<Button className="bg-navy px-5 py-2 text-sm text-white">+ Nuevo Producto</Button>}
					categorias={CATEGORIAS}
					onCrear={crearProducto}
				/>
			</div>
			<div className="p-2">
				<SectionPanel noPadding className="rounded-lg p-3">
					<SearchField name="search" className="w-full">
						<SearchField.Group className="h-12 px-4">
							<SearchField.SearchIcon />
							<SearchField.Input className="w-full" placeholder="Buscar por nombre o categoría..." value={busqueda} onChange={(event) => setBusqueda(event.target.value)} />
							<SearchField.ClearButton onPress={() => setBusqueda("")} />
						</SearchField.Group>
					</SearchField>
				</SectionPanel>
			</div>
			<div className="p-2 pt-3">
				<ProductTable productos={productosFiltrados} onDelete={eliminarProducto} />
			</div>
		</div>
	);
}
