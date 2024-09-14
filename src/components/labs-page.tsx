"use client";

import Link from "next/link";
import React from "react";
import { ExpandableCardDemo } from "./ui/product-grid";

export default function LabsPage({ lab }: { lab: any }) {

  const gallery = () => {
    console.log(lab)
    if (!lab.galeria?.length) return null;

    const items = lab.galeria.map((item: any) => {
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
        <header className="container mx-auto flex justify-between items-stretch">
          <section className="flex-grow flex flex-col">
            <h1 className="text-neutral-600 md:text-4xl mb-8 text-4xl font-bold leading-none tracking-tighter p-0 !m-0">{ lab.name }</h1>
            {
              lab.website && (
                <Link className="text-lime-500 underline" href={ lab.website } target="_blank"> { lab.website }</Link>
              )
            }
          </section>
          <aside className="text-right w-1/3 flex flex-col gap-2">
            {
              lab.localizacao && (
                <p><strong className="block text-xs">Endereço:</strong> { lab.localizacao }</p>
              )
            }
            {
              lab.phone && (
                <p><strong className="block text-xs">Telefone:</strong> { lab.phone }</p>
              )
            }
          </aside>
        </header>
      </section>
    </React.Fragment>
  )
}