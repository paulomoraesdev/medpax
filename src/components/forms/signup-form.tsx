"use client";

import React from "react";

import { useForm } from "react-hook-form";
import addUser from "@/lib/repositories/users";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    addUser(data)
      .then(() => {
        alert("Cadastro realizado com sucesso!"); 
        reset();
      })
      .catch((err) => alert("Erro ao cadastrar!"));
  };

  return (
    <form className="ml-auo space-y-4" onSubmit={handleSubmit(onSubmit)} >
      <input type='text' {...register("name", { required: true })}  placeholder='Nome Completo'
          className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
      {errors.name && (
        <p className="text-red-500 text-xs relative -top-3">Nome é obrigatório</p>
      )}
      <input type='text' {...register("cpf", { required: true })} placeholder='CPF'
          className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
      {errors.cpf && (
        <p className="text-red-500 text-xs relative -top-3">CPF é obrigatório</p>
      )}
      <input type='text' placeholder='Telefone' {...register("phone", { required: true })}
          className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
      {errors.phone && (
        <p className="text-red-500 text-xs relative -top-3">
          Telefone é obrigatório
        </p>
      )}
      <textarea placeholder='Dependentes' {...register("dependentes")} rows={ 6 }
          className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500 resize-none"></textarea>
      <button type='submit'
          className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6">Cadastrar</button>
    </form>
  );
}