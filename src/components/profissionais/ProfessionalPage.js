'use client'

import ProfessionalCard from './ProfessionalCard'
import AppGallery from '../AppGallery'
import { useState } from 'react'
import { IconHome } from '@tabler/icons-react'
import Link from 'next/link'

export default function ProfessionalPage({ professional }) {
  const [loaded, setLoaded] = useState(false)

  const testAssinatura = () => new Promise((resolve) => {
    if (!professional.assinante) window.location.href = '/profissionais'
    else resolve()
  })

  testAssinatura().then(() => setLoaded(true))

  return (
    <>
      {
        loaded &&
        <main>
          <div class="text-sm breadcrumbs">
            <ul>
              <li><Link href="/profissionais"><IconHome size={ 14 } className='mr-2' /> Profissionais</Link></li>
              <li>{ professional.name }</li>
            </ul>
          </div>
          <ProfessionalCard professional={ professional } notClickable />
          <hr />
          {
            professional.galeria?.length > 0 &&
            <AppGallery gallery={ professional.galeria } />
          }
        </main>
      }
    </>
  )
}
