"use client"

import { useForm } from "react-hook-form";
import addUser from '@/repository/users'

export default function SignupButton() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    const el = document.querySelector('#signup-modal')
    addUser(data)
      .then(() => alert('Cadastro realizado com sucesso!'))
      .catch((err) => alert('Erro ao cadastrar!'))
      .finally(() => {
        el.checked = false
      })
  }

  return (
    <>
      <label className="btn btn-outline btn-info btn-sm" htmlFor="signup-modal">
        Cadastrar
      </label>
      <div className="divider"></div>
      <input type="checkbox" id="signup-modal" className="modal-toggle" />
      <dialog className="modal">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-box">
          <h3 className="font-bold text-lg">Cadastre-se e usufrue hoje mesmo!</h3>
          <div className="form-control w-full w-full mt-4">
            <label className="label">
              <span className="label-text">Nome Completo</span>
            </label>
            <input type="text" className="input input-sm input-bordered w-full w-full" {...register("name", { required: true })} />
            {errors.name && <p className="text-red-500 text-xs mt-3">Nome é obrigatório</p>}
          </div>
          <div className="form-control w-full w-full mt-4">
            <label className="label">
              <span className="label-text">CPF</span>
            </label>
            <input type="text" className="input input-sm input-bordered w-full w-full" {...register("cpf", { required: true })} />
            {errors.cpf && <p className="text-red-500 text-xs mt-3">CPF é obrigatório</p>}
          </div>
          <div className="form-control w-full w-full mt-4">
            <label className="label">
              <span className="label-text">Telefone</span>
            </label>
            <input type="text" className="input input-sm input-bordered w-full w-full" {...register("phone", { required: true })} />
            {errors.phone && <p className="text-red-500 text-xs mt-3">Telefone é obrigatório</p>}
          </div>
          <div className="form-control w-full w-full mt-4">
            <label className="label">
              <span className="label-text">Dependentes</span>
            </label>
            <textarea className="textarea textarea-bordered h-24 w-full" {...register("dependentes")}></textarea>
            <label className="label">
              <span className="label-text-alt">Você pode adicionar até 7 dependentes. Informe no campo acima o nome completo e grau de parentêsco de cada um.</span>
            </label>
          </div>
          <div className="modal-action">
            <button className="btn btn-success">Cadastrar</button>
          </div>
        </form>
      </dialog>
    </>
  )
}
