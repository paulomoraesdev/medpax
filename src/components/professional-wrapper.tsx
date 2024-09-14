"use client";

import React from "react";
import { ProfessionalsProvider } from "@/providers/professionals-provider";
import ProfessionalList from "./professional-list";

export default function ProfessionalWrapper({ categories, list }: { categories: any, list: any }) {
  return (
    <ProfessionalsProvider>
      <ProfessionalList categories={ categories } list={ list } />
    </ProfessionalsProvider>
  )
}