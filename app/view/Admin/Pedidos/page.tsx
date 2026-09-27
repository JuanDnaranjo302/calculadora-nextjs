"use client";
import { usePedidos } from "@/src/Common/Hooks/usePedidos";
import Title from "@/src/Common/components/title"
import { TopNav } from "@/src/Common/components/TopNav"
import PedidosCards from "@/src/feature/Pedidos/components/PedidosCards";
import SectionPanel from "@/src/Common/components/SectionPanel"
import { SearchField } from "@heroui/react";
import { Label, ListBox, Select } from "@heroui/react";
import { DatePicker, DateField, Calendar } from '@heroui/react';
import PedidosTable from "@/src/feature/Pedidos/components/PedidosTable"
export default function PedidosPage(){
    const { pedidos, pedidosFiltrados, estado, setEstado, busqueda, setBusqueda, actualizarEstado } = usePedidos();
    return(
        <div className="bg-[#c7ddcc] min-h-screen w-full overflow-x-hidden">
             <TopNav/>
             <div className="flex items-center justify-between w-full text-black p-4">
                <Title
                    title="Pedidos"
                    icon="clipboardList" color="green" size={35}
                    descripcion="Gestion y seguimiento de pedidos del dia "
                />
            </div>
            <div className="pr-3 pl-3">
                <PedidosCards data={{
                    total: pedidos.length,
                    entregados: pedidos.filter((pedido) => pedido.estado === "entregado").length,
                    pendientes: pedidos.filter((pedido) => pedido.estado === "pendiente" || pedido.estado === "solicitado").length,
                    cancelados: pedidos.filter((pedido) => pedido.estado === "cancelado").length,
                }} />
            </div>
            <div className="px-3 pt-4 gap-2">
                <SectionPanel bodyClassName="grid grid-cols-4 gap-8 items-start px-2" className="text-black" icon="filter" iconColor="green" title="Filtro de busqueda">
                    <Select className="w-full" value={estado} onChange={(value) => setEstado(String(value))}>
                        <Label className="text-black">Estado</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox className="text-black">
                                <ListBox.Item id="todos" textValue="Todos">
                                    Todos
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="solicitado" textValue="Solicitado">
                                    Solicitado
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="pendiente" textValue="Pendiente">
                                    Pendiente
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="entregado" textValue="Entregado">
                                    Entregado
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="cancelado" textValue="Cancelado">
                                    Cancelado
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <DatePicker className="w-full" name="date">
                        <Label className="text-black">Date</Label>
                        <DateField.Group fullWidth>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                            <DateField.Suffix>
                                <DatePicker.Trigger>
                                    <DatePicker.TriggerIndicator />
                                </DatePicker.Trigger>
                            </DateField.Suffix>
                        </DateField.Group>
                        <DatePicker.Popover>
                            <Calendar className="text-black" aria-label="Event date">
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
                                    <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                                </Calendar.Grid>
                                <Calendar.YearPickerGrid>
                                    <Calendar.YearPickerGridBody>
                                        {({year}) => <Calendar.YearPickerCell year={year} />}
                                    </Calendar.YearPickerGridBody>
                                </Calendar.YearPickerGrid>
                            </Calendar>
                        </DatePicker.Popover>
                    </DatePicker>
                    <SearchField name="Cliente" fullWidth>
                        <Label className="text-black">Cliente</Label>
                        <SearchField.Group className="px-4 h-9">
                            <SearchField.Input className="w-full" placeholder="Nombre del cliente" />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>

                    <SearchField name="Buscar" fullWidth>
                        <Label className="text-black">Buscar</Label>
                        <SearchField.Group className="px-4 h-9">
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-full" placeholder="ID o cliente" value={busqueda} onChange={(event) => setBusqueda(event.target.value)} />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </SectionPanel>
                <div className="pt-3">
                    <PedidosTable
                        pedidos={pedidosFiltrados}
                        onAceptar={(pedido) => actualizarEstado(pedido, "pendiente")}
                        onRechazar={(pedido) => actualizarEstado(pedido, "cancelado")}
                    />
                </div>
            </div>
        </div>
    )
}
