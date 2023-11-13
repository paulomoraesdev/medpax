import getProfessional from '@/repository/professional'

import ProfessionalPage from '@/components/profissionais/ProfessionalPage'

export const revalidate = 60

export default async function Page({ params: { id } }) {
  const professional = await getProfessional(id)

  return (
    <section className="grid grid-cols-1 gap-1">
      {
        professional &&
        <ProfessionalPage professional={ professional.fields } />
      }
    </section>
  )
}
