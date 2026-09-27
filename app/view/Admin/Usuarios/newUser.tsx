import NuevoUsuario from "@/src/feature/Usuarios/components/NuevoUsuario";
import { Button } from "@heroui/react";

<NuevoUsuario
	trigger={
		<Button className="bg-navy text-white">+ Nuevo Usuario</Button>
	}
	onCrear={(data) => {
		console.log("Crear usuario:", data);

	}}
/>