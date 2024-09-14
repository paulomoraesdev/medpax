'use client'

import React from "react";

export const ProfessionalsContext = React.createContext<any>([]);

export function ProfessionalsProvider({ children }: any) {
  const [filters, setFilters]: any = React.useState<any>([])

  return (
    <ProfessionalsContext.Provider value={{ filters, setFilters }}>
      { children }
    </ProfessionalsContext.Provider>
  );
}