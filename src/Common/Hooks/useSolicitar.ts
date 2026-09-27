"use client";
import { useMemo, useState } from "react";
import type { ItemCarrito, SolicitarProducto } from "@/src/Common/Types";

export function useSolicitar(products: SolicitarProducto[]) {
	const [categoriaActiva, setCategoriaActiva] = useState("Todos"); const [busqueda, setBusqueda] = useState(""); const [carrito, setCarrito] = useState<ItemCarrito[]>([]);
	const productosFiltrados = useMemo(() => products.filter((p) => (categoriaActiva === "Todos" || p.categoria === categoriaActiva) && p.nombre.toLowerCase().includes(busqueda.toLowerCase())), [products, categoriaActiva, busqueda]);
	const agregarAlCarrito = (p: SolicitarProducto) => setCarrito((items) => { const found = items.find((i) => i.id === p.id); return found ? items.map((i) => i.id === p.id ? { ...i, cantidad: i.cantidad + 1 } : i) : [...items, { ...p, cantidad: 1 }]; });
	const incrementar = (id: string) => setCarrito((items) => items.map((i) => i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i));
	const decrementar = (id: string) => setCarrito((items) => items.map((i) => i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i).filter((i) => i.cantidad > 0));
	return { categoriaActiva, setCategoriaActiva, busqueda, setBusqueda, carrito, productosFiltrados, destacados: products.filter((p) => p.destacado), agregarAlCarrito, incrementar, decrementar, finalizarPedido: () => setCarrito([]) };
}
