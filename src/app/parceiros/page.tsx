import React from "react";
import getPartners from "@/lib/repositories/partners"
import getPartnersCategories from "@/lib/repositories/partners-categories";
import PartnersWrapper from "@/components/partners-wrapper";

export const revalidate = 60;

export default async function ParceirosPage() {
  const partners: any = await getPartners();
  const categories: any = await getPartnersCategories();

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-neutral-600 md:text-4xl mb-8 text-4xl font-bold leading-none tracking-tighter">
        Parceiros
      </h1>
      <PartnersWrapper categories={ categories.items ?? [] } list={ partners.items ?? [] } />
    </div>
  )
}