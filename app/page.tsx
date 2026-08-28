import Boton from "@/src/Componentes/Boton";
export default function Home() {
  return (
    <div className="text-2xl text-center text-black p-65 m-10 bg-white ">
        <h1 className=" text-6xl mb-6 font-serif">Ejercicio</h1>
        <hr className="w-full border-t-2 border-dashed my-6"/>
      <div className="italic rounded-lg inset-shadow-sm inset-shadow-indigo-500  ">
      <div className="grid grid-cols-1 gap-2 px-4 py-3" >
        <Boton titulo="0.0" color="text-white" bg="bg-black" />
      </div>
    <div className="grid grid-cols-4 gap-2 text-center px-4">
    <Boton  titulo="C" color="text-red-800"/>
    <Boton titulo="+/-" />
    <Boton  titulo="%"  />
    <Boton  titulo="/"  />
    <Boton  titulo="7"  />
    <Boton  titulo="8"  />
    <Boton  titulo="9"  />
    <Boton  titulo="-"  />
    <Boton  titulo="4"  />
    <Boton  titulo="5"  />
    <Boton  titulo="6"  />
    <Boton  titulo="+"  />
    <Boton  titulo="1"  />
    <Boton  titulo="2"  />
    <Boton  titulo="3"  />
    <Boton  titulo="."  />
    </div>
    <div className="grid grid-cols-1 gap-2 px-4 py-3">
      <Boton titulo="0" bg="bg-white"/>
       <Boton titulo="=" color="text-white"  bg="bg-black" />
    </div>
    </div>
    <p>Integrantes: Alejandro Giraldo - Juan Diego Naranjo
    </p>
      </div>
  );
}
