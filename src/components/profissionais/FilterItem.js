'use client'

import FilterButton from "./FilterButton"

export default function FilterItem({ handleClick, active = false, content, variant = null }) {
  return (
    <FilterButton 
      handleClick={ handleClick }
      active={ active }
      variant={ variant }
    >
      { content.icon }
      <p className="text-xs ml-2">
        { content?.title }
      </p>
    </FilterButton>
  )
}
