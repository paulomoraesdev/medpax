"use client";

import { useContext } from "react";
import { LabFilterContext } from "@/providers/LabFilterProvider";
import LabCard from "./LabCard";

export default function LabsList({ list }) {
  const { filters } = useContext(LabFilterContext);

  const filteredLabs =
    filters.length > 0
      ? list.filter(
          (lab) =>
            lab.fields.categorias?.length > 0 &&
            lab.fields.categorias?.find(
              (categorias) => filters.includes(categorias.fields?.key) ?? false,
            ),
        )
      : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {filteredLabs.map((lab) => (
        <LabCard key={lab.sys.id} index={lab.sys.id} lab={lab.fields} />
      ))}
    </div>
  );
}
