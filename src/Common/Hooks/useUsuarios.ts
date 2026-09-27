"use client";
import { useMemo, useState } from "react";
import type { Usuario } from "@/src/Common/Types";
import { handleCreateUser } from "@/src/feature/Usuarios/action/usuarios";
import type { NuevoUsuarioData } from "@/src/feature/Usuarios/components/NuevoUsuario";

export function useUsuarios() {
	const [usuarios, setUsuarios] = useState<Usuario[]>([]); const [busqueda, setBusqueda] = useState("");
	const usuariosFiltrados = useMemo(() => usuarios.filter((u) => `${u.nombre} ${u.email}`.toLowerCase().includes(busqueda.toLowerCase())), [usuarios, busqueda]);
	return { usuariosFiltrados, busqueda, setBusqueda, crearUsuario: (data: NuevoUsuarioData) => setUsuarios((items) => [...items, handleCreateUser(data)]) };
}
