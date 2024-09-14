import SignUpForm from "@/components/forms/signup-form";
import Link from "next/link";
import React from "react";

export default function CadastroPage() {
  return (
    <div className="container mx-auto my-20">
      <div className="grid sm:grid-cols-2 items-start gap-14 p-8 font-[sans-serif]">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">Cadastre-se</h1>
          <p className="text-sm text-gray-500 mt-2">Preencha o formulário ao lado para cadastrar-se.</p>
          <p className="text-sm text-gray-500">O dependentes devem ser informados com nome completo e grau de parentesco.</p>
          <p className="text-sm text-gray-500">Após o preenchimento, entraremos em contato em até 24 horas para a confirmação e ativação.</p>
          <p className="text-sm text-gray-500">
            Antes de realizar o cadastro, leia nosso <Link className="text-teal-600 underline" href="/regulamento">regulamento</Link>. 
            Ao enviar o cadastro, você concorda com os termos e condições do mesmo.
          </p>

          <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Dúvidas?</h2>
              <ul className="mt-4">
                  <li className="flex items-center">
                      <a target="_blank" href="mailto:planomedpax@gmail.com" className="text-teal-600 text-sm">
                          <small className="block">E-Mail</small>
                          <strong>planomedpax@gmail.com</strong>
                      </a>
                  </li>
                  <li className="flex items-center mt-2">
                      <a target="_blank" href="https://wa.me/5514996767312" className="text-teal-600 text-sm">
                          <small className="block">Whatsapp</small>
                          <strong>(14) 99676-7312</strong>
                      </a>
                  </li>
              </ul>
          </div>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}