"use client";

import React from "react";
import LabsCard from "./labs-card";
import LabsFilter from "./labs-filter";
import { LabsContext } from "@/providers/labs-provider";

export default function LabsList({ categories, list }: { categories: any, list: any }) {
  const { filters } = React.useContext(LabsContext);

  const filteredList: any = list.filter((partner: any) => {
    const categorias = partner.fields.categorias;
    const find = categorias?.find((cat: any) => {
      if (!cat.fields?.key) return false;
      return filters.includes(cat.fields?.key);
    });
    return find;
  });

  return (
    <div>
      <LabsFilter categories={ categories }/>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          filteredList?.map((lab: any) => (
            <LabsCard 
              key={ lab.sys.id } 
              identifier={ lab.sys.id } 
              lab={ lab.fields } 
            />
          ))
        }
      </div>
    </div>
  )
}