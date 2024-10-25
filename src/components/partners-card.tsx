import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PartnersCard({ partner, identifier }: { partner: any, identifier: any }) {
  return (
    <article className="whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
				<div className="flex justify-start item-center gap-1">
          { partner.categoria?.map((categoria: any, index: any) => (<div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block" key={ index }>{categoria.fields?.nome}</div>)) }
				</div>
				<div className="flex gap-2 items-start my-5">
				  {
						partner.logotipo && (
						  <div className="">
								<Image
                  src={ `https:${partner.logotipo.fields.file.url}` }
                  alt={ partner.logotipo.fields.title }
                  width={ 100 }
                  height={ 100 }
                />
							</div>
						)
					}
				  <div className="flex-grow">
    				<h3 className="font-black text-gray-800 md:text-lg text-xl">{ partner.name }</h3>
            {
              partner.localizacao && (
                <p>
                  <strong>Endereço:</strong> { partner.localizacao }
                </p>
              )
            }
            {
              partner.phone && (
                <p>
                  <strong>Telefone:</strong> { partner.phone }
                </p>
              )
            }
				  </div>
				</div>
        <footer className="flex items-center justify-end gap-2 mt-4">
          {
            partner.website && (
              <button onClick={ (ev) => { ev.preventDefault(); ev.stopPropagation(); window.open(partner.website); } }>
                <p className="px-4 py-2 bg-teal-700 border border-teal-700 hover:bg-teal-900 text-white text-sm font-medium rounded-md transition-all duration-300">
                  Site
                </p>
              </button>
            )
          }
          {
            partner.midiasocial && (
              <button onClick={ (ev) => { ev.preventDefault(); ev.stopPropagation(); window.open(partner.midiasocial); } }>
                <p className="px-4 py-2 text-teal-700 border border-teal-700 bg-transparent hover:bg-lime-500 hover:text-white hover:border-lime-500 text-sm font-medium rounded-md transition-all duration-300">
                  Mídia Social
                </p>
              </button>
            )
          }
          <Link href={ `/parceiros/${ identifier }` }>
            <p className="px-4 py-2 text-teal-700 border border-teal-700 bg-transparent hover:bg-lime-500 hover:text-white hover:border-lime-500 text-sm font-medium rounded-md transition-all duration-300">
              Mais Detalhes
            </p>
          </Link>
        </footer>
    </article>
  )
}
