'use client'

import React from "react";

export const LabsContext = React.createContext<any>([]);

export function LabsProvider({ children }: any) {
  const [filters, setFilters]: any = React.useState<any>([])

  return (
    <LabsContext.Provider value={{ filters, setFilters }}>
      { children }
    </LabsContext.Provider>
  );
}