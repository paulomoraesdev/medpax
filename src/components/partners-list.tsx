"use client";

import React from "react";
import PartnersCard from "./partners-card";
import PartnersFilter from "./partners-filter";
import { PartnersContext } from "@/providers/partners-provider";

export default function PartnersList({ categories, list }: { categories: any, list: any }) {
  const { filters } = React.useContext(PartnersContext);

  const filteredList: any = list.filter((partner: any) => {
    const categorias = partner.fields.categoria;
    const find = categorias.find((cat: any) => {
      if (!cat.fields?.key) return false;
      return filters.includes(cat.fields?.key);
    });
    return find;
  });

  return (
    <div>
      <PartnersFilter categories={ categories } />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          filteredList?.map((partner: any) => (
            <PartnersCard 
              key={ partner.sys.id } 
              identifier={ partner.sys.id } 
              partner={ partner.fields } 
            />
          ))
        }
      </div>
    </div>
  )
}