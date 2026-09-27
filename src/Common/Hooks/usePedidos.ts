"use client";
import { useMemo, useState } from "react";
import type { Pedido } from "@/src/Common/Types";
import { handleUpdateOrderStatus } from "@/src/feature/Pedidos/action/pedidos";

export function usePedidos() {
	const [pedidos, setPedidos] = useState<Pedido[]>([]); const [estado, setEstado] = useState("todos"); const [busqueda, setBusqueda] = useState("");
	const pedidosFiltrados = useMemo(() => pedidos.filter((p) => (estado === "todos" || p.estado === estado) && `${p.numeroOrden} ${p.cliente}`.toLowerCase().includes(busqueda.toLowerCase())), [pedidos, estado, busqueda]);
	const actualizarEstado = (pedido: Pedido, status: Pedido["estado"]) => setPedidos((items) => handleUpdateOrderStatus(items, pedido.id, status));
	return { pedidos, pedidosFiltrados, estado, setEstado, busqueda, setBusqueda, actualizarEstado };
}
