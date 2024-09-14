"use client";

import React from "react";
import ProfessionalFilter from "./professional-filter";
import ProfessionalCard from "./professional-card";
import { ProfessionalsContext, ProfessionalsProvider } from "@/providers/professionals-provider";

export default function ProfessionalList({ categories, list }: { categories: Array<any>, list: Array<any> }) {
  const { filters } = React.useContext(ProfessionalsContext);

  const filteredList: any = list.filter((professional) => {
    const specialties = professional.fields.specialties;
    const find = specialties.find((specialty: any) => {
      if (!specialty.fields?.key) return false;
      return filters.includes(specialty.fields?.key);
    });
    return find;
  });

  return (
    <div>
      <ProfessionalFilter categories={ categories } />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          filteredList?.map((professional: any) => (
            <ProfessionalCard 
              key={ professional.sys.id } 
              identifier={ professional.sys.id } 
              professional={ professional.fields } 
            />
          ))
        }
      </div>
    </div>
  )
}