'use client'

import PartnersList from '@/components/parceiros/PartnersList'

export default function PartnersWrapper({ partners }) {
  return (
    <>
      <main className="mt-6">
        <PartnersList list={ partners } />
      </main>
    </>
  )
}
