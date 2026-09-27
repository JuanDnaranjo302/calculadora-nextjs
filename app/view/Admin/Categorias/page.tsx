"use client";
import { useCategorias } from "@/src/Common/Hooks/useCategorias";
import SectionPanel from "@/src/Common/components/SectionPanel";
import Title from "@/src/Common/components/title";
import { TopNav } from "@/src/Common/components/TopNav";
import { Button, SearchField } from "@heroui/react";
import CategoryTable from "@/src/feature/Categorias/components/categoryTable";
import NuevaCategoria from "@/src/feature/Categorias/components/NuevaCategoria";

export default function CategoriasPage() {
	const { categoriasFiltradas, busqueda, setBusqueda, crearCategoria } = useCategorias();

	return (
		<div className="min-h-screen w-full overflow-x-hidden bg-[#c7ddcc]">
			<TopNav />
			<div className="flex w-full items-center justify-between p-4 text-black">
				<Title title="Categorías" icon="category" color="green" size={35} descripcion="Organiza los productos por categoría" />
				<NuevaCategoria
					trigger={<Button className="rounded-lg bg-navy px-5 py-2 text-sm text-white">+ Nueva Categoría</Button>}
					onCrear={crearCategoria}
				/>
			</div>
			<div className="p-2">
				<SectionPanel noPadding className="overflow-hidden rounded-lg p-3">
					<SearchField name="search" className="w-full">
						<SearchField.Group className="h-12 border-none px-4 outline-none focus-within:ring-0">
							<SearchField.SearchIcon />
							<SearchField.Input className="w-full outline-none focus:outline-none focus:ring-0" placeholder="Buscar por nombre de categoría..." value={busqueda} onChange={(event) => setBusqueda(event.target.value)} />
							<SearchField.ClearButton onPress={() => setBusqueda("")} />
						</SearchField.Group>
					</SearchField>
				</SectionPanel>
			</div>
			<div className="p-2 pt-3">
				<CategoryTable categorias={categoriasFiltradas} />
			</div>
		</div>
	);
}
