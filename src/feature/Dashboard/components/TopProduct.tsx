import Image from "next/image";
import DataTable, { IColumn } from "@/src/Common/components/DataTable";

export interface TopProduct {
  id: string;
  image: string;
  name: string;
  category: string;
  sold: number;
  stock: number;
  price: string;
  isLowStock?: boolean;
}

interface ITopProductsWidgetProps {
  products: TopProduct[];
}

const columns: IColumn<TopProduct>[] = [
  {
    header: "Producto",
    accessor: (row, index) => (
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center font-medium">
          {index + 1}
        </span>
        <Image
          src={row.image}
          alt={row.name}
          width={40}
          height={40}
          unoptimized
          className="rounded-lg object-cover"
        />
      </div>
    ),
  },
  {
    header: "Nombre",
    accessor: (row) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm">{row.name}</span>
        <span className="text-xs text-gray-400">{row.category}</span>
      </div>
    ),
  },
  {
    header: "Vendidos",
    accessor: (row) => <span className="text-gray-600">{row.sold}</span>,
  },
  {
    header: "Stock",
    accessor: (row) => (
      <span className="text-gray-600">
        {row.stock}
      </span>
    ),
  },
  {
    header: "Precio",
    accessor: (row) => <span className="font-medium">{row.price}</span>,
    className: "text-right",
  },
];

export default function TopProductsWidget({ products }: ITopProductsWidgetProps) {
  return (
    <DataTable
      title="Productos más vendidos"
      icon="award"
      iconColor="orange"
      columns={columns}
      data={products}
      rowKey={(row) => row.id}
    />
  );
}
