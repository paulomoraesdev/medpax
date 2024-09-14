"use client";

import React from "react";
import { PartnersProvider } from "@/providers/partners-provider";
import PartnersList from "./partners-list";

export default function PartnersWrapper({ categories, list }: { categories: any, list: any }) {
  return (
    <PartnersProvider>
      <PartnersList categories={ categories } list={ list } />
    </PartnersProvider>
  )
}