import React from "react";
import getProfessionals from "@/lib/repositories/professionals";
import getProfessionalCategories from "@/lib/repositories/professionals-categories";
import ProfessionalWrapper from "@/components/professional-wrapper";

export const revalidate = 60;

export default async function ProfissionaisPage() {
  const professionals: any = await getProfessionals();
  const categories: any = await getProfessionalCategories();

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-neutral-600 md:text-4xl mb-8 text-4xl font-bold leading-none tracking-tighter">
        Médicos
      </h1>
      <ProfessionalWrapper categories={ categories.items ?? [] } list={ professionals.items ?? [] } />
    </div>
  )
}