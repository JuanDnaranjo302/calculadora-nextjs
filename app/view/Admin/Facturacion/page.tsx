"use client";
import SectionPanel from "@/src/Common/components/SectionPanel";
import Title from "@/src/Common/components/title";
import { TopNav } from "@/src/Common/components/TopNav";
import FacturacionCards from "@/src/feature/Facturacion/components/FacturacionCards";
import FacturacionTable from "@/src/feature/Facturacion/components/FacturacionTable";
import { Label, DatePicker, DateField, Calendar, SearchField } from "@heroui/react";
export default function app(){
    return(
        <div className="bg-[#c7ddcc] min-h-screen w-full overflow-x-hidden">
             <TopNav/>
             <div className="flex items-center justify-between w-full text-black p-4">
                <Title
                    title="Facturacion"
                    icon="receipt" color="green" size={35}
                    descripcion="Gestion y seguimiento de pedidos del dia "
                />
            </div>
            <div className="pr-3 pl-3">
            <FacturacionCards data={{ facturasDelDia: 0, totalFacturado: "$0", fechaReporte: "-" }}/>
            </div>
             <div className="px-3 pt-4 gap-2">
                <SectionPanel bodyClassName="grid grid-cols-4 gap-8 items-start px-2" className="text-black" icon="filter" iconColor="green" title="Filtro de busqueda">
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
                            <SearchField.Input className="w-full" placeholder="ID o cliente" />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </SectionPanel>
                <div className="pt-3">
                    <FacturacionTable facturas={[]} />
                </div>
            </div>
        </div>
    )
}