import type { Product } from "@/src/Common/Types";
import type { NuevoProductoData } from "@/src/feature/Productos/components/NuevoProducto";
import { formatCurrency } from "@/src/Common/Utils/formatCurrency";

export function handleCreateProduct(data: NuevoProductoData): Product {
	return { id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`, imagen: data.imagen || undefined, nombre: data.nombre, categoria: data.categoria, precio: formatCurrency(data.precio), stock: data.stock, activo: data.estado === "activo" };
}

export function handleDeleteProduct(products: Product[], id: string): Product[] { return products.filter((product) => product.id !== id); }
