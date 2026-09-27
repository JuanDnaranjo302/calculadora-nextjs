"use client";
import { useState } from "react";
import type { NuevaCategoriaData } from "@/src/feature/Categorias/components/NuevaCategoria";
export function useCategoryForm() { const [nombre, setNombre] = useState(""); const [estado, setEstado] = useState<NuevaCategoriaData["estado"]>("activo"); return { nombre, setNombre, estado, setEstado }; }
