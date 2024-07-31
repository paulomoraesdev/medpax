"use client";

import { useContext } from "react";
import { CompanyFilterContext } from "@/providers/CompanyFilterProvider";
import PartnersCard from "./PartnersCard";

export default function PartinersList({ list }) {
  const { filters } = useContext(CompanyFilterContext);

  console.log(list[0].fields.categoria);

  const filteredPartners =
    filters.length > 0
      ? list.filter(
          (lab) =>
            lab.fields.categoria?.length > 0 &&
            lab.fields.categoria?.find(
              (categorias) => filters.includes(categorias.fields?.key) ?? false,
            ),
        )
      : list;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {filteredPartners.map((partner) => (
        <PartnersCard
          key={partner.sys.id}
          index={partner.sys.id}
          partner={partner.fields}
        />
      ))}
    </div>
  );
}
