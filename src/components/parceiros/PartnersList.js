'use client'

import PartnersCard from './PartnersCard'

export default function PartinersList({ list }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
      { 
        list.map((partner, index) => (
          <PartnersCard 
            key={ partner.sys.id }
            index={ partner.sys.id }
            partner={ partner.fields }
          />
        ))
      }
    </div>
  )
}
