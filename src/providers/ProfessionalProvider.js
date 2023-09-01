'use client'

import { createContext, useState } from 'react'

export const ProfessionalContext = createContext({});

export function ProfessionalProvider({ children }) {
  const [currentProfessional, setCurrentProfessional] = useState({})

  return (
    <ProfessionalContext.Provider value={{ currentProfessional, setCurrentProfessional }}>
      { children }
    </ProfessionalContext.Provider>
  );
}