import PartnersPage from '@/components/partners-page'
import getPartner from '@/lib/repositories/entry'

export const revalidate = 60

export default async function Page({ params: { id } }: any) {
  const partner = await getPartner(id)

  return (
    <PartnersPage partner={partner.fields ?? {}} />
  )
}
