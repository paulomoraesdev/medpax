import Link from "next/link";
import React from "react";
import home1 from "@/assets/home1.png"
import home2 from "@/assets/home2.png"
import Image from "next/image";

export default function ParaEmpresasPage() {
  return (
    <div className="container mx-auto">
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 my-10">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Torne-se uma empresa <br />parceira</h1>

            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">Anuncie sua marca, seja visto e inclua gratuitamente e sem carência seus funcionários no plano Medpax.</p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <Image className="h-full w-full object-cover object-center" width={ 550 } height={ 550 }  src={home1} alt="" />
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <Image className="h-full w-full object-cover object-center" width={ 550 } height={ 550 }  src={home2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 px-5 md:px-0">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Seja visto por nossos associados!</h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          Torne a sua empresa visível para um público qualificado e exclusivo! Ao se tornar parceiro, seu negócio estará diretamente acessível a mais de mil associados que visitam nosso site diariamente em busca de serviços e produtos. Com um espaço dedicado à sua marca, você poderá exibir uma galeria de fotos dos seus produtos e atualizar essas imagens semanalmente, aumentando o alcance e o engajamento com potenciais clientes.
          <br /><br />

          Além disso, sua empresa terá a oportunidade de cadastrar funcionários no nosso plano de saúde Medpax, sem carência e com condições especiais. Essa parceria não só fortalece a imagem da sua empresa, mas também oferece benefícios diretos para seus colaboradores, tornando-se um atrativo ainda maior para o crescimento do seu negócio!
        </p>
      </div>
      <section>
        <div className="relative items-center w-full py-10 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="flex flex-wrap items-start justify-center w-full gap-4 px-5 mx-auto lg:px-0">
            <div className="w-full xl:w-1/3 lg:w-2/6 md:text-center lg:text-left">
              <div className="flex flex-col p-8 lg:p-0">
                <strong className="mb-1 text-xs font-semibold tracking-widest text-teal-600 uppercase">Assinatura Medpax</strong>
                <span className="mb-8 text-2xl font-bold text-neutral-600 tracking-relaxed lg:text-5xl">Planos</span>
                <p className="mx-auto mb-4 text-xl font-light text-gray-500 text-opacity-70 lg:pr-10">Conheça os dois planos de parceria disponíveis.</p>
              </div>
            </div>
            <div className="w-full xl:w-1/4 md:w-2/6">
              <div className="relative flex flex-col h-full p-8 bg-gray-50 rounded-xl hover:border-white">
                <span className="mb-4 text-base font-medium tracking-widest text-neutral-600 uppercase"> Plano 1 </span>
                <div className="flex items-end text-3xl font-black leading-none text-neutral-600 lg:text-4xl">
                  <span>R$19,90</span>
                </div>
                <ul>
                  <li className="flex items-center mt-8 mb-2 text-base font-medium tracking-tight text-neutral-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>Galeria com 8 fotos</strong>
                  </li>
                  <li className="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>5 assinaturas gratuitas</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full xl:w-1/4 md:w-2/6">
              <div className="relative flex flex-col h-full p-8 bg-teal-600 rounded-xl hover:border-white">
                <span className="mb-4 text-base font-medium tracking-widest text-white uppercase"> Plano 2 </span>
                <div className="flex items-end text-3xl font-black leading-none text-white lg:text-4xl">
                  <span>
                    <span>R$24,90</span>
                  </span>
                </div>
                <ul>
                  <li className="flex items-center mt-8 mb-2 text-base font-medium tracking-tight text-white">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>Galeria com 16 fotos</strong>
                  </li>
                  <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>10 assinaturas gratuitas</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
          <div>
            <h2 className="text-xl font-bold text-teal-500 md:text-2xl">Comece já!</h2>
            <p className="text-gray-600">Entre em contato conosco e comece a usufruir do plano, sem carência.</p>
          </div>

          <Link target="_blank" href="https://api.whatsapp.com/send/?phone=5514996767312&text&type=phone_number&app_absent=0" className="inline-block rounded-lg bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
            Entrar em contato
          </Link>
        </div>
      </section>
    </div>
  )
}