import type { Category } from "@/src/Common/Types";
import type { NuevaCategoriaData } from "@/src/feature/Categorias/components/NuevaCategoria";

export function handleCreateCategory(data: NuevaCategoriaData): Category { return { id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`, nombre: data.nombre, activo: data.estado === "activo" }; }
