'use client'

import LabCard from './LabCard'
import AppGallery from '../AppGallery'
import { useState } from 'react'
import { IconHome } from '@tabler/icons-react'
import Link from 'next/link'

export default function LabsPage({ lab }) {
  const [loaded, setLoaded] = useState(false)

  const testAssinatura = () => new Promise((resolve) => {
    if (!lab.assinante) window.location.href = '/laboratorios'
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
              <li><Link href="/laboratorios"><IconHome size={ 14 } className='mr-2' /> Laboratórios</Link></li>
              <li>{ lab.name }</li>
            </ul>
          </div>
          <LabCard lab={ lab } notClickable />
          <hr />
          {
            lab.galeria?.length > 0 &&
            <AppGallery gallery={ lab.galeria } />
          }
        </main>
      }
    </>
  )
}
