import React from "react";
import getLabs from "@/lib/repositories/labs"
import getLabsCategories from "@/lib/repositories/labs-categories";
import LabsWrapper from "@/components/labs-wrapper";

export const revalidate = 60;

export default async function LaboratoriosPage() {
  const labs: any = await getLabs();
  const categories: any = await getLabsCategories();

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-neutral-600 md:text-4xl mb-8 text-4xl font-bold leading-none tracking-tighter">
        Exames
      </h1>
      <LabsWrapper categories={ categories.items ?? [] } list={ labs.items ?? [] } />
    </div>
  )
}