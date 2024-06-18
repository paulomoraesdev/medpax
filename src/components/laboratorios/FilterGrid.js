"use client";

import { useContext } from "react";
import { IconClearAll } from "@tabler/icons-react";
import categoriaExames from "@/repository/categoria-exames";

import { LabFilterContext } from "@/providers/LabFilterProvider";
import FilterItem from "./FilterItem";

export default function FilterGrid() {
  const { filters, setFilters } = useContext(LabFilterContext);

  const isSelected = (key) => filters.includes(key);

  const handleClick = (key = null) => {
    if (!key) return setFilters([]);
    if (!isSelected(key)) return setFilters([...filters, key]);

    return setFilters(filters.filter((filter) => filter !== key));
  };

  const badges = categoriaExames.map((categoria) => (
    <FilterItem
      key={categoria.key}
      handleClick={() => handleClick(categoria.key)}
      content={categoria}
      active={isSelected(categoria.key)}
    />
  ));
  return (
    <nav className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
      {badges}
      {filters.length > 0 && (
        <FilterItem
          handleClick={() => handleClick()}
          content={{
            title: "Limpar Filtros",
            icon: <IconClearAll size={18} />,
          }}
          variant="clear"
        />
      )}
    </nav>
  );
}
