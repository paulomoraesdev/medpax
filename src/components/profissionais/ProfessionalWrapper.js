'use client'

import { ProfessionalProvider } from '@/providers/ProfessionalProvider'

import ProfessionalList from '@/components/profissionais/ProfessionalList'
import ProfessionalMap from '@/components/profissionais/ProfessionalMap'

export default function ProfessionalWrapper({ professionals }) {
  return (
    <ProfessionalProvider>
      <main className="mt-6">
        <ProfessionalList list={ professionals } />
      </main>
      {/* <aside className="mt-6 ml-4">
        <ProfessionalMap />
      </aside> */}
    </ProfessionalProvider>
  )
}
