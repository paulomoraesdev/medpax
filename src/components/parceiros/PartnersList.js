'use client'

import PartnersCard from './PartnersCard'

export default function PartinersList({ list }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
      { 
        list.map((partner, index) => (
          <PartnersCard 
            key={ index }
            index={ index + 1 }
            partner={ partner.fields }
          />
        ))
      }
    </div>
  )
}
