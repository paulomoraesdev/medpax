'use client'

import { useContext } from 'react'
import { FilterContext } from '@/providers/FilterProvider'
import ProfessionalCard from './ProfessionalCard'

export default function ProfessionalList({ list }) {
  const { filters } = useContext(FilterContext)

  const filteredProfessionals = filters.length > 0 ?
    list.filter(professional => 
      professional.fields.specialties.length > 0 && 
      professional.fields.specialties?.find(specialty => filters.includes(specialty.fields.key))
    ) : list

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
      { 
        filteredProfessionals.map((professional, index) => (
          <ProfessionalCard 
            key={ index }
            professional={ professional.fields }
            specialties={ professional.fields.specialties?.map(specialty => specialty.fields)}
          />
        ))
      }
    </div>
  )
}
