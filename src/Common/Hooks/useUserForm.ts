"use client";
import { useState } from "react";
import type { NuevoUsuarioData } from "@/src/feature/Usuarios/components/NuevoUsuario";
export function useUserForm() { const [nombreCompleto, setNombreCompleto] = useState(""); const [correo, setCorreo] = useState(""); const [contrasena, setContrasena] = useState(""); const [confirmarContrasena, setConfirmarContrasena] = useState(""); const [rol, setRol] = useState<NuevoUsuarioData["rol"]>("administrativo"); const [estado, setEstado] = useState<NuevoUsuarioData["estado"]>("activo"); return { nombreCompleto, setNombreCompleto, correo, setCorreo, contrasena, setContrasena, confirmarContrasena, setConfirmarContrasena, rol, setRol, estado, setEstado }; }
