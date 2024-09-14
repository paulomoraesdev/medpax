import ProfessionalPage from '@/components/professional-page';
import getProfessional from '@/lib/repositories/entry'

export const revalidate = 60

export default async function Page({ params: { id } }: any) {
  const professional = await getProfessional(id)

  return (
    <ProfessionalPage professional={ professional.fields ?? {}} />
  )
}
