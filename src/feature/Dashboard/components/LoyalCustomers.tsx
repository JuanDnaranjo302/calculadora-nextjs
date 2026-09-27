import SectionPanel from "@/src/Common/components/SectionPanel";
import { getInitials } from "@/src/Common/Utils/getInitials";

export interface LoyalCustomer {
	id: string;
	name: string;
	orders: number;
	score: number;
}

interface ILoyalCustomersWidgetProps {
	customers: LoyalCustomer[];
}

const RANK_STYLES = [
	"bg-yellow-400 text-white", // 1er lugar - oro
	"bg-gray-300 text-white", // 2do lugar - plata
	"bg-orange-400 text-white", // 3er lugar - bronce
];

const DEFAULT_RANK_STYLE = "bg-gray-100 text-gray-400";

export default function LoyalCustomersWidget({
	customers,
}: ILoyalCustomersWidgetProps) {
	return (
		<SectionPanel title="Clientes fieles" icon="award">
			<div className="flex flex-col gap-4">
				{customers.map((customer, index) => (
					<div key={customer.id} className="flex items-center gap-3">
						<span
							className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold shrink-0 ${
								RANK_STYLES[index] ?? DEFAULT_RANK_STYLE
							}`}
						>
							{index + 1}
						</span>

						<span aria-label={customer.name} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800">{getInitials(customer.name)}</span>

						<div className="flex-1 flex flex-col min-w-0">
							<span className="font-medium text-sm truncate">
								{customer.name}
							</span>
							<span className="text-xs text-gray-400">
								{customer.orders} pedidos en total
							</span>
						</div>

						<span className="text-xs font-medium text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">
							{customer.orders}
						</span>
					</div>
				))}
			</div>
		</SectionPanel>
	);
}
