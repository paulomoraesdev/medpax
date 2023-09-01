import getProfessionals from '@/repository/professionals'

import FilterGrid from '@/components/profissionais/FilterGrid'
import ProfessionalWrapper from '@/components/profissionais/ProfessionalWrapper'

export default async function Page() {
  const professionals = await getProfessionals()

  return (
    <section className="grid grid-cols-1 gap-1">
      <header>
        <FilterGrid />
      </header>
      <ProfessionalWrapper professionals={ professionals.items ?? [] } />
    </section>
  )
}
