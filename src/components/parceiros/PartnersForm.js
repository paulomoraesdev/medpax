"use client"

import { useForm } from "react-hook-form";
import addPartner from '@/repository/business'

export default function PartnersForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    addPartner(data)
      .then(() => alert('Cadastro realizado com sucesso!'))
      .catch((err) => alert('Erro ao cadastrar!'))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-lg w-1/2">Preencha o formulário abaixo, e entraremos em contato para lhe oferecer a melhor parceria!</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="form-control w-full w-full">
          <label className="label">
            <span className="label-text">Nome da Empresa:</span>
          </label>
          <input type="text" className="input input-md input-bordered w-full w-full" {...register("name", { required: true })} />
          {errors.name && <p className="text-red-500 text-xs mt-3">Nome da empresa é obrigatório</p>}
        </div>
        <div className="form-control w-full w-full">
          <label className="label">
            <span className="label-text">Nome do Responsável</span>
          </label>
          <input type="text" className="input input-md input-bordered w-full w-full" {...register("responsavel", { required: true })} />
          {errors.name && <p className="text-red-500 text-xs mt-3">Nome do responsável é obrigatório</p>}
        </div>
        <div className="form-control w-full w-full">
          <label className="label">
            <span className="label-text">Telefone</span>
          </label>
          <input type="text" className="input input-md input-bordered w-full w-full" {...register("phone", { required: true })} />
          {errors.phone && <p className="text-red-500 text-xs mt-3">Telefone é obrigatório</p>}
        </div>
        <div className="form-control w-full w-full">
          <label className="label">
            <span className="label-text">Qtd. Funcionários</span>
          </label>
          <input type="number" className="input input-md input-bordered w-full w-full" {...register("employees", { required: true })} />
          {errors.employees && <p className="text-red-500 text-xs mt-3">Qtd. de funcionários é obrigatório</p>}
        </div>
      </div>
      <button className="btn btn-success mt-5">Solicitar contato</button>
    </form>
  )
}