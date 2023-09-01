"use client"

export default function SignupButton() {

  const handleOpenModal = () => {
    const el = document.querySelector('#signup-modal')
    if (el) el.showModal()
  }

  return (
    <>
      <button className="btn btn-outline btn-info btn-sm" onClick={ handleOpenModal }>
        Cadastrar
      </button>
      <div className="divider"></div>
      <dialog id="signup-modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Cadastre-se e usufrue hoje mesmo!</h3>
          <div class="form-control w-full w-full mt-4">
            <label class="label">
              <span class="label-text">Nome Completo</span>
            </label>
            <input type="text" class="input input-sm input-bordered w-full w-full" />
          </div>
          <div class="form-control w-full w-full mt-4">
            <label class="label">
              <span class="label-text">CPF</span>
            </label>
            <input type="text" class="input input-sm input-bordered w-full w-full" />
          </div>
          <div class="form-control w-full w-full mt-4">
            <label class="label">
              <span class="label-text">Telefone</span>
            </label>
            <input type="text" class="input input-sm input-bordered w-full w-full" />
          </div>
          <div class="form-control w-full w-full mt-4">
            <label class="label">
              <span class="label-text">Dependentes</span>
            </label>
            <textarea class="textarea textarea-bordered h-24 w-full" placeholder="Bio"></textarea>
            <label class="label">
              <span class="label-text-alt">Você pode adicionar até 7 dependentes. Informe no campo acima o nome completo e grau de parentêsco de cada um.</span>
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
