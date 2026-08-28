import { Color } from "chart.js";

export default function Boton({titulo, color, bg}:{titulo?: string, color?:Color, bg?:string }) {
  return (
    <div>
      <div className={`${bg} py-7 px-2 text-center rounded-xl border border-gray-400 ${color}`}>{titulo}</div>
    </div>
  );
}
