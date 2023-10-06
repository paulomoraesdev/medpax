'use client'

import LabsList from '@/components/laboratorios/LabsList'

export default function LabsWrapper({ labs }) {
  return (
    <>
      <main className="mt-6">
        <LabsList list={ labs } />
      </main>
    </>
  )
}
