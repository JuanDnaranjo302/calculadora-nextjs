import NuevaCategoria from "@/src/feature/Categorias/components/NuevaCategoria"
import { Button } from "@heroui/react";
<NuevaCategoria
	trigger={<Button className="bg-navy text-white">+ Nueva Categoría</Button>}
	onCrear={(data) => console.log("Crear categoría:", data)}
/>