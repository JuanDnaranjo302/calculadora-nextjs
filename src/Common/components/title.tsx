import { RenderIcon } from "./RenderIcon";

interface ITitle {
  title: string;
  icon?: string;
  color?: string
  descripcion?: string
  size?: number

}

export default function Title({ title, icon, color, descripcion, size }: ITitle) {
  return (
    <div className="flex items-center gap-2">
      {icon && <RenderIcon icon={icon} color={color} size={size} />}
      <div className="flex flex-col">
        <h3 className="font-bold text-xl leading-none">{title}</h3>
        {descripcion && (
          <span className="text-sm text-gray-400 mt-1">{descripcion}</span>
        )}
      </div>
    </div>
  );
}
