"use client";

import { useContext } from "react";
import { IconClearAll } from "@tabler/icons-react";
import categories from "@/repository/categoria-parceiros";

import FilterItem from "./FilterItem";
import { CompanyFilterContext } from "@/providers/CompanyFilterProvider";

export default function FilterGrid() {
  const { filters, setFilters } = useContext(CompanyFilterContext);

  const isSelected = (key) => filters.includes(key);

  const handleClick = (key = null) => {
    if (!key) return setFilters([]);
    if (!isSelected(key)) return setFilters([...filters, key]);

    return setFilters(filters.filter((filter) => filter !== key));
  };

  const badges = categories.map((category) => (
    <FilterItem
      key={category.key}
      handleClick={() => handleClick(category.key)}
      content={category}
      active={isSelected(category.key)}
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
