"use client";
import TopNavUser from "@/src/Common/components/TopNavUser";
import Sidebar from "@/src/Common/components/SideBar";
import ProductoCard from "@/src/feature/Solicitar/components/ProductCard";
import ResumenPedido from "@/src/feature/Solicitar/components/ResumenPedido";
import type { SolicitarProducto } from "@/src/Common/Types";
import { useSolicitar } from "@/src/Common/Hooks/useSolicitar";
import { CLIENTE_LINKS } from "@/src/Common/Constants/UserPage";
import { SearchField } from "@heroui/react";

const CATEGORIAS = ["Todos", "Café Caliente", "Bebidas Frías", "Postres", "Panadería"];

const PRODUCTOS: SolicitarProducto[] = [
	{
		id: "1",
		nombre: "Latte de Vainilla",
		precio: 3.5,
		categoria: "Café Caliente",
		imagen:
			"https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=200&auto=format&fit=crop",
		destacado: true,
	},
	{
		id: "2",
		nombre: "Cappuccino Clásico",
		precio: 3.25,
		categoria: "Café Caliente",
		imagen:
			"https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=200&auto=format&fit=crop",
		destacado: true,
	},
	{
		id: "3",
		nombre: "Frappuccino Caramelo",
		precio: 4.75,
		categoria: "Bebidas Frías",
		imagen:
			"https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=200&auto=format&fit=crop",
		destacado: true,
	},
	{
		id: "4",
		nombre: "Espresso Doble",
		precio: 2.5,
		categoria: "Café Caliente",
		imagen:
			"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=200&auto=format&fit=crop",
	},
	{
		id: "5",
		nombre: "Matcha Latte",
		precio: 4.25,
		categoria: "Bebidas Frías",
		imagen:
			"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=200&auto=format&fit=crop",
	},
	{
		id: "6",
		nombre: "Croissant de Mantequilla",
		precio: 3.0,
		categoria: "Panadería",
		imagen:
							"https://images.unsplash.com/photo-1725545901708-27d59e5c4226?auto=format&fit=crop&w=400&q=80",
	},
];

export default function SolicitarPage() {
	const { categoriaActiva, setCategoriaActiva, busqueda, setBusqueda, carrito, productosFiltrados, destacados, agregarAlCarrito, incrementar, decrementar, finalizarPedido } = useSolicitar(PRODUCTOS);

	return (
		<div className="bg-[#c7ddcc] min-h-screen w-full overflow-x-hidden">
			<TopNavUser nombre="María Anderson" rol="Cliente" notificaciones={2} />

			<div className="flex gap-3 p-3">
				<div className="w-64 shrink-0">
					<Sidebar links={CLIENTE_LINKS} logoutHref="/view/Login" />
				</div>

				<div className="flex-1 flex flex-col gap-4">
					<SearchField value={busqueda} onChange={setBusqueda} fullWidth>
						<SearchField.Group className="px-4 h-12 bg-white rounded-full">
							<SearchField.SearchIcon />
							<SearchField.Input
								className="w-full"
								placeholder="Buscar producto..."
							/>
							<SearchField.ClearButton />
						</SearchField.Group>
					</SearchField>

					<div className="flex items-center gap-2 flex-wrap">
						{CATEGORIAS.map((cat) => (
							<button
								key={cat}
								onClick={() => setCategoriaActiva(cat)}
								className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
									categoriaActiva === cat
										? "bg-navy text-white"
										: "bg-white text-gray-500"
								}`}
							>
								{cat}
							</button>
						))}
					</div>

					{categoriaActiva === "Todos" && busqueda === "" && (
						<div>
							<h3 className="font-bold text-black mb-2">Destacados</h3>
							<div className="grid max-w-[510px] auto-rows-fr grid-cols-3 items-stretch gap-3">
								{destacados.map((producto) => (
									<ProductoCard
										key={producto.id}
										producto={producto}
										onAgregar={agregarAlCarrito}
									/>
								))}
							</div>
						</div>
					)}

					<div>
						<h3 className="font-bold text-black mb-2">Catálogo</h3>
						<div className="grid max-w-[510px] auto-rows-fr grid-cols-3 items-stretch gap-3">
							{productosFiltrados.map((producto) => (
								<ProductoCard
									key={producto.id}
									producto={producto}
									onAgregar={agregarAlCarrito}
								/>
							))}
						</div>
					</div>
				</div>

				<div className="w-80 shrink-0">
					<ResumenPedido
						items={carrito}
						onIncrementar={incrementar}
						onDecrementar={decrementar}
						onFinalizar={finalizarPedido}
					/>
				</div>
			</div>
		</div>
	);
}
