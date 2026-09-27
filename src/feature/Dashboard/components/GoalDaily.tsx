import { Card } from "@heroui/react";
import SectionPanel from "@/src/Common/components/SectionPanel";
import CardAroma from "@/src/Common/components/CardAroma";

interface ITotalesDelDia {
  entregados: number;
  pendientes: number;
  cancelados: number;
  total: number;
  meta: {
	actual: number;
	objetivo: number;
  };
}

export default function GoalDaily({
  entregados,
  pendientes,
  cancelados,
  total,
  meta,
}: ITotalesDelDia) {
  const porcentaje = Math.round((meta.actual / meta.objetivo) * 100);

  return (
	<SectionPanel title="Totales del día" icon="trending-up">
	  <div className="grid grid-cols-5 gap-6  ">
		<CardAroma
		  icon="check" 
		  value={entregados}
		  description="Entregados"
		  backgroundColor="bg-green-50"
		/>
		<CardAroma
		  icon="clock"
		  value={pendientes}
		  description="Pendientes"
		  backgroundColor="bg-blue-50"
		/>
		<CardAroma
		  icon="x"
		  value={cancelados}
		  description="Cancelados"
		  backgroundColor="bg-red-50"
		/>
		<CardAroma
		  icon="calendar"
		  value={total}
		  description="Total"
		  backgroundColor="bg-emerald-50"
		/>
		{/* Card especial de meta */}
		<Card className="bg-[#1e1b3a] text-white rounded-2xl p-4 h-27.5 flex flex-col justify-between">
		  <div className="flex justify-between items-center text-xs">
			<span>Meta del día</span>
			<span className="text-green-400">{porcentaje}%</span>
		  </div>
		  <div className="text-xl font-bold">
			{meta.actual}
			<span className="text-sm font-normal text-gray-300">/{meta.objetivo}</span>
		  </div>
		  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
			<div
			  className="h-full bg-yellow-400 rounded-full"
			  style={{ width: `${porcentaje}%` }}
			/>
		  </div>
		</Card>
	  </div>
	</SectionPanel>
  );
}