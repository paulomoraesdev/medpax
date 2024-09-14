"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ExpandableCardDemo } from "./ui/product-grid";

export default function PartnersPage({ partner }: { partner: any }) {
  const logo = () => {
    if (!partner.logotipo.fields.file.url) return null;
    return <Image 
      className='mr-4'
      src={ `https:${partner.logotipo.fields.file.url}` }
      alt={ partner.name }
      width={ 150 }
      height={ 150 }
    />
  }

  const gallery = () => {
    console.log(partner)
    if (!partner.galeria?.length) return null;

    const items = partner.galeria.map((item: any) => {
      return {
        id: item.sys.id,
        description: "",
        title: item.fields.title ?? "",
        src: `https:${item.fields.file.url}`,
        content: () => {
          if (!item.fields.description) return;
          return (
            <p>
              { item.fields.description }
            </p>
          )
        }
      }
    });

    return (
      <section className="container mx-auto my-5">
        <h2 className="text-md font-bold uppercase my-5">Vitrine de produtos</h2>
        <ExpandableCardDemo cards={ items } />
      </section>
    )
  }

  return (
    <React.Fragment>
      <section className="bg-gray-100 py-20">
        <header className="container mx-auto flex justify-between items-center gap-2">
          {
            partner.logotipo.fields.file?.url
            ? logo()
            : (
              <section className="flex-grow flex flex-col">
                <h1 className="text-neutral-600 md:text-4xl mb-8 text-4xl font-bold leading-none tracking-tighter p-0 !m-0">{ partner.name }</h1>
                {
                  partner.website && (
                    <Link className="text-lime-500 underline" href={ partner.website } target="_blank"> { partner.website }</Link>
                  )
                }
              </section>
            )
          }
          <aside className="text-right w-1/3 flex flex-col gap-2">
            {
              partner.localizacao && (
                <p><strong className="block text-xs">Endereço:</strong> { partner.localizacao }</p>
              )
            }
            {
              partner.phone && (
                <p><strong className="block text-xs">Telefone:</strong> { partner.phone }</p>
              )
            }
          </aside>
        </header>
      </section>
      { gallery() }
    </React.Fragment>
  )
}