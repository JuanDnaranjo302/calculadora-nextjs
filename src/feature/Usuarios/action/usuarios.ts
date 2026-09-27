import type { Usuario } from "@/src/Common/Types";
import type { NuevoUsuarioData } from "@/src/feature/Usuarios/components/NuevoUsuario";

export function handleCreateUser(data: NuevoUsuarioData): Usuario { return { id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`, nombre: data.nombreCompleto, email: data.correo, rol: data.rol, activo: data.estado === "activo" }; }
