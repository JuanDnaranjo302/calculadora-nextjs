import type { Pedido } from "@/src/Common/Types";

export function handleUpdateOrderStatus(orders: Pedido[], id: string, status: Pedido["estado"]): Pedido[] { return orders.map((order) => order.id === id ? { ...order, estado: status } : order); }
