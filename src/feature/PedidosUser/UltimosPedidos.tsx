"use client";
import TopNavUser from "@/src/Common/components/TopNavUser";
import Sidebar from "@/src/Common/components/SideBar";
import Title from "@/src/Common/components/title";
import SectionPanel from "@/src/Common/components/SectionPanel";
import DataTable, { IColumn } from "@/src/Common/components/DataTable";
import { RenderIcon } from "@/src/Common/components/RenderIcon";
import { CLIENTE_LINKS } from "@/src/Common/Constants/UserPage";
import { Label, ListBox, Select } from "@heroui/react";
import { DatePicker, DateField, Calendar } from "@heroui/react";

export interface PedidoHistorial {
    id: string;
    orden: string;
    fecha: string;
    valor: string;
    estado: "entregado" | "pendiente" | "solicitado" | "cancelado";
}

const ESTADO_STYLES: Record<PedidoHistorial["estado"], string> = {
    entregado: "bg-emerald-50 text-emerald-600",
    pendiente: "bg-yellow-50 text-yellow-600",
    solicitado: "bg-blue-50 text-blue-500",
    cancelado: "bg-gray-100 text-gray-400",
};

const ESTADO_LABEL: Record<PedidoHistorial["estado"], string> = {
    entregado: "Entregado",
    pendiente: "Pendiente",
    solicitado: "Solicitado",
    cancelado: "Cancelado",
};

interface IUltimosPedidosPageProps {
    pedidos: PedidoHistorial[];
    onVolverAPedir?: (pedido: PedidoHistorial) => void;
}

export default function UltimosPedidosPage({
    pedidos,
    onVolverAPedir,
}: IUltimosPedidosPageProps) {
    const columns: IColumn<PedidoHistorial>[] = [
        {
            header: "Orden",
            accessor: (row) => (
                <span className="text-navy font-medium">{row.orden}</span>
            ),
            className: "w-32",
        },
        {
            header: "Fecha",
            accessor: (row) => <span className="text-gray-500">{row.fecha}</span>,
            className: "w-32",
        },
        {
            header: "Valor",
            accessor: (row) => <span className="font-medium">{row.valor}</span>,
            className: "w-24",
        },
        {
            header: "Estado",
            accessor: (row) => (
                <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${ESTADO_STYLES[row.estado]}`}
                >
                    {ESTADO_LABEL[row.estado]}
                </span>
            ),
            className: "w-32",
        },
        {
            header: "Opciones",
            accessor: (row) => (
                <button
                    onClick={() => onVolverAPedir?.(row)}
                    className="flex items-center gap-1.5 bg-navy text-white text-xs font-medium px-3 py-1.5 rounded-lg ml-auto"
                >
                    <RenderIcon icon="refresh" size={12} color="white" />
                    Volver a pedir
                </button>
            ),
            className: "text-right",
        },
    ];

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
                            title="Últimos Pedidos"
                            descripcion="Consulta el historial de tus pedidos y vuelve a realizarlos."
                        />
                    </div>

                    <SectionPanel bodyClassName="grid grid-cols-2 gap-6 items-start">
                        <Select className="w-full" placeholder="Todos">
                            <Label className="text-black">Estado</Label>
                            <Select.Trigger className="w-full flex items-center justify-between">
                                <Select.Value className="w-full flex-1 text-left" />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox className="text-black">
                                    <ListBox.Item id="todos" textValue="Todos">
                                        Todos
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="entregado" textValue="Entregado">
                                        Entregado
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="pendiente" textValue="Pendiente">
                                        Pendiente
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="solicitado" textValue="Solicitado">
                                        Solicitado
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="cancelado" textValue="Cancelado">
                                        Cancelado
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <DatePicker className="w-full" name="fecha">
                            <Label className="text-black">Fecha</Label>
                            <DateField.Group fullWidth className="w-full">
                                <DateField.Input>
                                    {(segment) => <DateField.Segment segment={segment} />}
                                </DateField.Input>
                                <DateField.Suffix>
                                    <DatePicker.Trigger>
                                        <DatePicker.TriggerIndicator />
                                    </DatePicker.Trigger>
                                </DateField.Suffix>
                            </DateField.Group>
                            <DatePicker.Popover>
                                <Calendar className="text-black" aria-label="Fecha del pedido">
                                    <Calendar.Header>
                                        <Calendar.YearPickerTrigger>
                                            <Calendar.YearPickerTriggerHeading />
                                            <Calendar.YearPickerTriggerIndicator />
                                        </Calendar.YearPickerTrigger>
                                        <Calendar.NavButton slot="previous" />
                                        <Calendar.NavButton slot="next" />
                                    </Calendar.Header>
                                    <Calendar.Grid>
                                        <Calendar.GridHeader>
                                            {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                        </Calendar.GridHeader>
                                        <Calendar.GridBody>
                                            {(date) => <Calendar.Cell date={date} />}
                                        </Calendar.GridBody>
                                    </Calendar.Grid>
                                    <Calendar.YearPickerGrid>
                                        <Calendar.YearPickerGridBody>
                                            {({ year }) => <Calendar.YearPickerCell year={year} />}
                                        </Calendar.YearPickerGridBody>
                                    </Calendar.YearPickerGrid>
                                </Calendar>
                            </DatePicker.Popover>
                        </DatePicker>
                    </SectionPanel>

                    <DataTable
                        columns={columns}
                        data={pedidos}
                        rowKey={(row) => row.id}
                    />
                </div>
            </div>
        </div>
    );
}
