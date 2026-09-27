import { ReactNode } from "react";
import SectionPanel from "@/src/Common/components/SectionPanel";

export interface IColumn<T> {
	header: string;
	accessor: (row: T, index: number) => ReactNode;
	className?: string;
}

interface IDataTableProps<T> {
	title?: string;
	icon?: string;
	iconColor?: string;
	action?: ReactNode;
	columns: IColumn<T>[];
	data: T[];
	rowKey: (row: T) => string;
}

export default function DataTable<T>({
	title,
	icon,
	iconColor,
	action,
	columns,
	data,
	rowKey,
}: IDataTableProps<T>) {
	return (
		<SectionPanel title={title} icon={icon} iconColor={iconColor} action={action} noPadding>
			<table className="w-full text-sm border-collapse ">
				<thead>
					<tr className="text-black text-left text-xs font-semibold uppercase tracking-wide bg-gray-50">
						{columns.map((column, ) => (
							<th
								key={column.header}
								className={`py-3 px-5 ${column.className ?? ""}`}
							>
								{column.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr key={rowKey(row)} className="border-t border-default-100">
							{columns.map((column) => (
								<td
									key={column.header}
									className={`py-3 px-5 ${column.className ?? ""}`}
								>
									{column.accessor(row, rowIndex)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</SectionPanel>
	);
}
