import getLabs from "@/repository/labs";

import LabsWrapper from "@/components/laboratorios/LabsWrapper";
import FilterGrid from "@/components/laboratorios/FilterGrid";

export const revalidate = 60;

export default async function Page() {
  const labs = await getLabs();

  return (
    <section className="grid grid-cols-1 gap-1">
      <header>
        <FilterGrid />
      </header>
      <LabsWrapper labs={labs.items ?? []} />
    </section>
  );
}
