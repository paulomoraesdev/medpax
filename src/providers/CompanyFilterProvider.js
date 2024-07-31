"use client";

import { createContext, useState } from "react";

export const CompanyFilterContext = createContext();

export function CompanyFilterProvider({ children }) {
  const [filters, setFilters] = useState([]);

  return (
    <CompanyFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </CompanyFilterContext.Provider>
  );
}
