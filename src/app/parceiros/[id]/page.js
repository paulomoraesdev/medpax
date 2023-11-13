import getPartner from '@/repository/partner'

import PartnersPage from '@/components/parceiros/PartnersPage'

export const revalidate = 60

export default async function Page({ params: { id } }) {
  const partner = await getPartner(id)

  return (
    <section className="grid grid-cols-1 gap-1">
      {
        partner &&
        <PartnersPage partner={ partner.fields } />
      }
    </section>
  )
}
