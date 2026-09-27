"use client";
import { useUsuarios } from "@/src/Common/Hooks/useUsuarios";
import { Button, SearchField } from "@heroui/react";
import { TopNav } from "@/src/Common/components/TopNav";
import Title  from "@/src/Common/components/title"
import SectionPanel from "@/src/Common/components/SectionPanel";
import UsuariosTable from "@/src/feature/Usuarios/components/UsersTable";
import NuevoUsuario from "@/src/feature/Usuarios/components/NuevoUsuario";
export default function UsuariosPage(){
    const { usuariosFiltrados, busqueda, setBusqueda, crearUsuario } = useUsuarios();
    return(
        <div className="bg-[#c7ddcc] min-h-screen w-full overflow-x-hidden">
            <TopNav/>
            <div className="flex items-center justify-between w-full text-black p-4">
                <Title
                title="Usuarios"
                icon="users" color="green" size={35}
                descripcion="Gestion personal del sistema"/>
                <NuevoUsuario
                    trigger={<Button className="bg-navy px-5 py-2 text-sm text-white">+ Nuevo Usuario</Button>}
                    onCrear={crearUsuario}
                />
            </div>
            <div className="p-2">
            <SectionPanel noPadding className="rounded-lg p-3">
                <SearchField name="search" className="w-full ">
                    <SearchField.Group className=" px-4 h-12">
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-full" placeholder="Buscar por nombre o por correo..." value={busqueda} onChange={(event) => setBusqueda(event.target.value)} />
                        <SearchField.ClearButton onPress={() => setBusqueda("")} />
                    </SearchField.Group>
                </SearchField>
            </SectionPanel>
            </div>
            <div className="pt-3 p-2">
            <UsuariosTable usuarios={usuariosFiltrados} />
            </div>
        </div>
    )
}
