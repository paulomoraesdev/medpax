import specialties from '@/repository/specialties'
import FilterItem from './FilterItem'

export default function FilterGrid() {
  const badges = specialties.map(specialty => <FilterItem specialty={ specialty } />)
  return (
    <nav className="flex">
      { badges }
    </nav>
  )
}
