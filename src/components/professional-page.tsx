"use client";

import Link from "next/link";
import React from "react";
import { ExpandableCardDemo } from "./ui/product-grid";

export default function ProfessionalPage({ professional }: { professional: any }) {

  const gallery = () => {
    if (!professional.galeria?.length) return null;

    const items = professional.galeria.map((item: any) => {
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
        <ExpandableCardDemo cards={ items } />
      </section>
    )
  }

  return (
    <React.Fragment>
      <section className="bg-gray-100 py-20">
        <header className="container mx-auto flex justify-between items-stretch">
          <section className="flex-grow flex flex-col">
            <h1 className="text-neutral-600 md:text-4xl mb-8 text-4xl font-bold leading-none tracking-tighter p-0 !m-0">{ professional.name }</h1>
            {
              professional.website && (
                <Link className="text-lime-500 underline" href={ professional.website } target="_blank"> { professional.website }</Link>
              )
            }
          </section>
          <aside className="text-right w-1/3 flex flex-col gap-2">
            {
              professional.localizacao && (
                <p><strong className="block text-xs">Endereço:</strong> { professional.localizacao }</p>
              )
            }
            {
              professional.phone && (
                <p><strong className="block text-xs">Telefone:</strong> { professional.phone }</p>
              )
            }
          </aside>
        </header>
      </section>
      { gallery() }
    </React.Fragment>
  )
}