import getPartners from '@/repository/partners'

import PartnersWrapper from '@/components/parceiros/PartnersWrapper'

export const revalidate = 60

export default async function Page() {
  const partners = await getPartners()

  return (
    <section className="grid grid-cols-1 gap-1">
      <PartnersWrapper partners={ partners.items ?? [] } />
    </section>
  )
}
