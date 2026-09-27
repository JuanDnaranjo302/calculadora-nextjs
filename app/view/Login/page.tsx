"use client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FiCoffee } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Checkbox } from '@heroui/react';
export default function home() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };
  return (
    <div className="flex min-h-screen items-center justify-center p-5 bg-[#c7ddcc]">
      <div className="flex flex-col items-center gap-2">
        <div className=" p-4 border border-black rounded-xl bg-navy ">
        <FiCoffee 
        color="white"
         size={50}
         /> 
        </div>
        <h1 className="text-2xl bold text-navy">Café Aroma</h1>
        <h2 className="text-black">Sistema de Pedidos Online</h2>
    <Form
      className="flex w-96 flex-col gap-4 border border-transparent rounded-lg p-4 bg-white"
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={onSubmit}
    >
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <h1 className="text-xl bold text-black">Inciar Sesion</h1>
      <Description >Ingrese sus credenciales para continuar</Description>
        <Label className="text-black">Correo electronico</Label>
        <div className="relative">
        <MdOutlineEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4"/>
        <Input className="w-87 pl-9 text-black " placeholder="john@example.com" />
        </div>
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label className="text-black">Contraseña</Label>
        <div className="relative">
        <TbLockPassword  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4"/>
        <Input className="w-87 pl-9 text-black" placeholder="********" />
        </div>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex grid-rows-2 gap-10 ">
        <Checkbox name="basic-terms">
      <Checkbox.Content>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <h1 className="text-black">Recordarme</h1>
      </Checkbox.Content>
    </Checkbox>
    <div className=""> 
        <a className="text-green-300 text-xs pl-6" href="¿Olvidaste tu contraseña?">¿Olvidaste tu contraseña?</a>
    </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <Button 
        className="bg-navy w-86 flex-1 text-xl p-2"
        type="submit">
          Ingresar
        </Button>
      </div>
    </Form>
      <footer className="text-center py-4">
        <p className="text-xs text-gray-400">
          © 2026 Café Aroma · Todos los derechos reservados
        </p>
      </footer>
      </div>
    </div>
  )
}