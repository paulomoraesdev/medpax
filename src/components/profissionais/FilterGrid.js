'use client'

import { useContext } from 'react'
import { IconClearAll } from '@tabler/icons-react'
import specialties from '@/repository/specialties'

import { FilterContext } from '@/providers/FilterProvider'
import FilterItem from './FilterItem'

export default function FilterGrid() {
  const { filters, setFilters } = useContext(FilterContext)

  const isSelected = key => filters.includes(key)

  const handleClick = (key = null) => {
    if (!key) return setFilters([])
    if (!isSelected(key)) return setFilters([...filters, key])

    return setFilters(filters.filter(filter => filter !== key))
  }

  const badges = specialties.map(specialty => (
    <FilterItem 
      key={ specialty.key }
      handleClick={ () => handleClick(specialty.key) }
      content={ specialty }
      active={ isSelected(specialty.key) }
    />
  ))
  return (
    <nav className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
      { badges }
      { 
        filters.length > 0 &&
        <FilterItem 
          handleClick={ () => handleClick() }
          content={{ title: 'Limpar Filtros', icon: <IconClearAll size={ 18 } /> }}
          variant='clear'
        />
      }
    </nav>
  )
}
