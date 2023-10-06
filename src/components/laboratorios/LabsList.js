'use client'

import LabCard from './LabCard'

export default function LabsList({ list }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
      { 
        list.map((lab, index) => (
          <LabCard 
            key={ index }
            index={ index + 1 }
            lab={ lab.fields }
          />
        ))
      }
    </div>
  )
}
