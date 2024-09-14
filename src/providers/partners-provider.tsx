'use client'

import React from "react";

export const PartnersContext = React.createContext<any>([]);

export function PartnersProvider({ children }: any) {
  const [filters, setFilters]: any = React.useState<any>([])

  return (
    <PartnersContext.Provider value={{ filters, setFilters }}>
      { children }
    </PartnersContext.Provider>
  );
}