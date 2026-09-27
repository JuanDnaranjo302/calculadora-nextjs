import type { LoyalCustomer } from "@/src/feature/Dashboard/components/LoyalCustomers";
import type { SalesSummaryItemData } from "@/src/feature/Dashboard/components/SalesSummary";
import type {TopProduct } from "@/src/feature/Dashboard/components/TopProduct";

export const mocks_producto: TopProduct[] = [
	{
		id: "1",
		image:
			"https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=150&auto=format&fit=crop",
		name: "Latte Clásico",
		category: "Cafés Calientes",
		sold: 28,
		stock: 40,
		price: "$8.500",
	},
	{
		id: "2",
		image:
			"https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=150&auto=format&fit=crop",
		name: "Frappuccino Caramelo",
		category: "Bebidas Frías",
		sold: 22,
		stock: 25,
		price: "$12.500",
	},
	{
		id: "3",
		image:
			"https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=150&auto=format&fit=crop",
		name: "Cappuccino Italiano",
		category: "Cafés Calientes",
		sold: 19,
		stock: 32,
		price: "$9.000",
	},
	{
		id: "4",
		image:
			"https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=150&auto=format&fit=crop",
		name: "Muffin de Arándanos",
		category: "Postres",
		sold: 15,
		stock: 15,
		isLowStock: true,
		price: "$5.500",
	},
	{
		id: "5",
		image:
			"https://images.unsplash.com/photo-1725545901708-27d59e5c4226?auto=format&fit=crop&w=300&q=80",
		name: "Croissant de Mantequilla",
		category: "Panadería",
		sold: 12,
		stock: 30,
		price: "$4.500",
	},
];
export const mocks_summary_dia: SalesSummaryItemData[] = [
	{
		id: "s1",
		icon: "shoppingBag",
		value: "42",
		label: "Ventas realizadas",
		iconBgColor: "bg-emerald-50",
		iconColor: "text-teal",
	},
	{
		id: "s2",
		icon: "wallet",
		value: "$1,245,000",
		label: "Ganancias totales",
		iconBgColor: "bg-blue-50",
		iconColor: "text-blue-500",
	},
	{
		id: "s3",
		icon: "piggyBank",
		value: "$186,500",
		label: "Ahorro acumulado",
		iconBgColor: "bg-orange-50",
		iconColor: "text-orange-400",
	},
];
 
export const mocks_summary_semana: SalesSummaryItemData[] = [
	{
		id: "s1",
		icon: "shoppingBag",
		value: "268",
		label: "Ventas realizadas",
		iconBgColor: "bg-emerald-50",
		iconColor: "text-teal",
	},
	{
		id: "s2",
		icon: "wallet",
		value: "$7,830,000",
		label: "Ganancias totales",
		iconBgColor: "bg-blue-50",
		iconColor: "text-blue-500",
	},
	{
		id: "s3",
		icon: "piggyBank",
		value: "$1,120,000",
		label: "Ahorro acumulado",
		iconBgColor: "bg-orange-50",
		iconColor: "text-orange-400",
	},
];
 
export const mocks_summary_mes: SalesSummaryItemData[] = [
	{
		id: "s1",
		icon: "shoppingBag",
		value: "1,140",
		label: "Ventas realizadas",
		iconBgColor: "bg-emerald-50",
		iconColor: "text-teal",
	},
	{
		id: "s2",
		icon: "wallet",
		value: "$32,450,000",
		label: "Ganancias totales",
		iconBgColor: "bg-blue-50",
		iconColor: "text-blue-500",
	},
	{
		id: "s3",
		icon: "piggyBank",
		value: "$4,860,000",
		label: "Ahorro acumulado",
		iconBgColor: "bg-orange-50",
		iconColor: "text-orange-400",
	},
];
 
export const mocks_summary_by_period = {
	Día: mocks_summary_dia,
	Semana: mocks_summary_semana,
	Mes: mocks_summary_mes,
};
export const mocks_customer: LoyalCustomer[] = [
	{
		id: "c1",
		name: "Laura Patiño",
		orders: 48,
		score: 48,
	},
	{
		id: "c2",
		name: "Esteban Ríos",
		orders: 36,
		score: 36,
	},
	{
		id: "c3",
		name: "Valentina Cruz",
		orders: 29,
		score: 29,
	},
	{
		id: "c4",
		name: "Camilo Ortega",
		orders: 22,
		score: 22,
	},
	{
		id: "c5",
		name: "Daniela Mora",
		orders: 18,
		score: 18,
	},
];
