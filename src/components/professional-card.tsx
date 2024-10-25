import { Professional } from "@/lib/types/professional";
import Link from "next/link";
import React from "react";

export default function ProfessionalCard({ professional, identifier }: { professional: any, identifier: any }) {
  const btn = () => {
    if (professional.linkkiwim) return {
      url: professional.linkkiwim,
      label: `Agendar online`
    }
    else if (professional.whatsapp) return {
      url: `https://wa.me/55${professional.whatsapp}?text=Olá,%20estou%20pelo%20site%20da%20Medpax%20e%20gostaria%20de%20agendar%20um%20horário`,
      label: `Solicitar agendamento`
    }
    else return {
      url: `https://wa.me/5514996767312?text=Olá,%20estou%20pelo%20site%20da%20Medpax%20e%20gostaria%20de%20agendar%20um%20horário%20com%20${professional.name}`,
      label: `Solicitar agendamento`
    }
  }

  return (
    <article className="whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
				<div className="flex justify-start item-center">
          { professional.specialties?.map((specialty: any, index: any) => (<div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block" key={ index }>{specialty.fields?.title}</div>)) }
				</div>
				<h3 className="font-black text-gray-800 md:text-lg text-md my-5">{ professional.name }</h3>
        {
          professional.localizacao && (
            <p>
              <strong>Endereço:</strong> { professional.localizacao }
            </p>
          )
        }
        {
          professional.phone && (
            <p>
              <strong>Telefone:</strong> { professional.phone }
            </p>
          )
        }
        <footer className="flex items-center flex-wrap justify-between mt-4 gap-2">
          {
            professional.amount && (
              <p className="text-xl font-black text-gray-800 w-full">
                { professional.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
            )
          }
          {
            professional.whatsapp && (
              <button onClick={ (ev) => { ev.preventDefault(); ev.stopPropagation(); window.open(btn().url); } }>
                <p className="px-4 py-2 bg-teal-700 hover:bg-teal-900 text-white text-sm font-medium rounded-md transition-all duration-300">
                  { btn().label }
                </p>
              </button>
            )
          }
          {
            professional.midiasocial && (
              <button onClick={ (ev) => { ev.preventDefault(); ev.stopPropagation(); window.open(professional.midiasocial); } }>
                <p className="px-4 py-2 bg-teal-700 hover:bg-teal-900 text-white text-sm font-medium rounded-md transition-all duration-300">
                  Mídia Social
                </p>
              </button>
            )
          }
          {
            professional.assinante && (
              <Link href={ `/profissionais/${ identifier }` }>
                <p className="px-4 py-2 bg-teal-700 hover:bg-teal-900 text-white text-sm font-medium rounded-md transition-all duration-300">
                  Mais Detalhes
                </p>
              </Link>
            )
          }
        </footer>
    </article>
  )
}
