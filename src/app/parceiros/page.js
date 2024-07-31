import getPartners from "@/repository/partners";

import PartnersWrapper from "@/components/parceiros/PartnersWrapper";
import FilterGrid from "@/components/parceiros/FilterGrid";

export const revalidate = 60;

export default async function Page() {
  const partners = await getPartners();

  return (
    <section className="grid grid-cols-1 gap-1">
      <header>
        <FilterGrid />
      </header>
      <PartnersWrapper partners={partners.items ?? []} />
    </section>
  );
}
