"use client";

import React from "react";
import { LabsProvider } from "@/providers/labs-provider";
import LabsList from "./labs-list";

export default function LabsWrapper({ categories, list }: { categories: any, list: any }) {
  return (
    <LabsProvider>
      <LabsList categories={ categories } list={ list } />
    </LabsProvider>
  )
}