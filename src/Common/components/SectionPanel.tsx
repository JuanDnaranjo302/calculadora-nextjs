import { Card } from "@heroui/react";
import { ReactNode } from "react";
import Title from "./title";

const SIZES = {
	sm: "h-16",
	md: "h-auto",
	lg: "h-[110px]",
	full: "h-full",
} as const;

interface ISectionPanelProps {
	title?: string;
	icon?: string;
	iconColor?: string
	action?: ReactNode;
	children: ReactNode;
	className?: string;
	bodyClassName?: string;
	noPadding?: boolean;
	size?: keyof typeof SIZES;
}

export default function SectionPanel({
	title,
	icon,
	iconColor,
	action,
	children,
	className = "",
	bodyClassName = "",
	noPadding = false,
	size = "md",
}: ISectionPanelProps) {
	return (
		<Card
			className={`w-full rounded-lg overflow-hidden  ${SIZES[size]} ${
				noPadding ? "p-0" : "p-5"
			} ${className}`}
		>
			{(title || action) && (
				<div
					className={`flex items-center justify-between mb-4 ${
						noPadding ? "px-5 pt-5" : ""
					}`}
				>
					{title && <Title title={title} icon={icon} color={iconColor}/> }
					{action}
				</div>
			)}
			<div className={bodyClassName}>{children}</div>
		</Card>
	);
}