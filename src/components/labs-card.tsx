import Link from "next/link";
import React from "react";

export default function LabsCard({ lab, identifier }: { lab: any, identifier: any }) {

  const Component = lab.assinante ? Link : 'article'

  return (
    <Component href={ `/laboratorios/${ identifier }`} className="whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
				<div className="flex justify-start item-center gap-1 flex-wrap">
          { lab.categorias?.map((categoria: any, index: any) => (<div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block" key={ index }>{categoria.fields?.nome}</div>)) }
				</div>
				<h3 className="font-black text-gray-800 md:text-lg text-xl my-5">{ lab.name }</h3>
        {
          lab.localizacao && (
            <p>
              <strong>Endereço:</strong> { lab.localizacao }
            </p>
          )
        }
        {
          lab.phone && (
            <p>
              <strong>Telefone:</strong> { lab.phone }
            </p>
          )
        }
        <footer className="flex items-center justify-between mt-4">
          {
            lab.website && (
              <button onClick={ (ev) => { ev.preventDefault(); ev.stopPropagation(); window.open(lab.website); } }>
                <p className="px-4 py-2 bg-teal-700 hover:bg-teal-900 text-white text-sm font-medium rounded-md transition-all duration-300">
                  Acessar o site
                </p>
              </button>
            )
          }
        </footer>
    </Component>
  )
}