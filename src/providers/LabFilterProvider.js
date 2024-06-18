"use client";

import { createContext, useState } from "react";

export const LabFilterContext = createContext();

export function LabFilterProvider({ children }) {
  const [filters, setFilters] = useState([]);

  return (
    <LabFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </LabFilterContext.Provider>
  );
}
