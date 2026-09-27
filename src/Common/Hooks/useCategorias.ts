"use client";
import { useMemo, useState } from "react";
import type { Category } from "@/src/Common/Types";
import { handleCreateCategory } from "@/src/feature/Categorias/action/categorias";
import type { NuevaCategoriaData } from "@/src/feature/Categorias/components/NuevaCategoria";

export function useCategorias() {
	const [categorias, setCategorias] = useState<Category[]>([]); const [busqueda, setBusqueda] = useState("");
	const categoriasFiltradas = useMemo(() => categorias.filter((c) => c.nombre.toLowerCase().includes(busqueda.toLowerCase())), [categorias, busqueda]);
	return { categoriasFiltradas, busqueda, setBusqueda, crearCategoria: (data: NuevaCategoriaData) => setCategorias((items) => [...items, handleCreateCategory(data)]) };
}
