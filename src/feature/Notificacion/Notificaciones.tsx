"use client";
import TopNavUser from "@/src/Common/components/TopNavUser";
import Sidebar from "@/src/Common/components/SideBar";
import Title from "@/src/Common/components/title";
import SectionPanel from "@/src/Common/components/SectionPanel";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import { CLIENTE_LINKS } from "@/src/Common/Constants/UserPage";

export interface Notificacion {
    id: string;
    titulo: string;
    descripcion: string;
    tiempo: string;
    leida: boolean;
}

interface INotificacionesPageProps {
    notificaciones: Notificacion[];
}

export default function NotificacionesPage({
    notificaciones,
}: INotificacionesPageProps) {
    return (
        <div className="bg-[#c7ddcc] min-h-screen w-full overflow-x-hidden">
            <TopNavUser nombre="María Anderson" rol="Cliente" notificaciones={2} />

            <div className="flex gap-3 p-3">
                <div className="w-64 shrink-0">
                    <Sidebar links={CLIENTE_LINKS} logoutHref="/view/Login" />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                    <div className="text-navy">
                        <Title
                            title="Notificaciones"
                            descripcion="Mantente al tanto del estado de tus pedidos y novedades."
                        />
                    </div>

                    <SectionPanel noPadding>
                        <div className="flex flex-col">
                            {notificaciones.map((n, index) => (
                                <div
                                    key={n.id}
                                    className={`flex items-start gap-3 px-5 py-4 ${
                                        index !== notificaciones.length - 1
                                            ? "border-b border-gray-100"
                                            : ""
                                    } ${!n.leida ? "bg-emerald-50" : "bg-white"}`}
                                >
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                        <RenderIcon icon="bell" size={14} color="#16123f" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <span className="font-medium text-sm text-black">
                                            {n.titulo}
                                        </span>
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            {n.descripcion}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-1.5 shrink-0">
                                        <span className="text-xs text-gray-400">{n.tiempo}</span>
                                        {!n.leida && (
                                            <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                                                <RenderIcon icon="check" size={10} color="white" />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionPanel>
                </div>
            </div>
        </div>
    );
}
