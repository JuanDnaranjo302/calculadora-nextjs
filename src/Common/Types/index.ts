export interface Category { id: string; nombre: string; activo: boolean }
export interface Product { id: string; imagen?: string; nombre: string; categoria: string; precio: string; stock: number; activo: boolean }
export interface Usuario { id: string; nombre: string; email: string; rol: "administrador" | "administrativo" | "mensajero"; activo: boolean }
export interface Pedido { id: string; numeroOrden: string; fecha: string; cliente: string; ubicacion: string; valor: string; estado: "solicitado" | "pendiente" | "entregado" | "cancelado"; productos?: { nombre: string; cantidad: number; precio: string; subtotal: string }[] }
export interface SolicitarProducto { id: string; nombre: string; precio: number; imagen: string; categoria: string; destacado?: boolean }
export interface ItemCarrito extends SolicitarProducto { cantidad: number }
