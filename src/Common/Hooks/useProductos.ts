"use client";
import { useMemo, useState } from "react";
import type { Product } from "@/src/Common/Types";
import { handleCreateProduct, handleDeleteProduct } from "@/src/feature/Productos/action/productos";
import type { NuevoProductoData } from "@/src/feature/Productos/components/NuevoProducto";

export function useProductos() {
	const [productos, setProductos] = useState<Product[]>([]);
	const [busqueda, setBusqueda] = useState("");
	const productosFiltrados = useMemo(() => productos.filter((p) => `${p.nombre} ${p.categoria}`.toLowerCase().includes(busqueda.toLowerCase())), [productos, busqueda]);
	return { productosFiltrados, busqueda, setBusqueda, crearProducto: (data: NuevoProductoData) => setProductos((items) => [...items, handleCreateProduct(data)]), eliminarProducto: (product: Product) => setProductos((items) => handleDeleteProduct(items, product.id)) };
}
