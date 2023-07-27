'use client'

export default function FilterItem({ specialty }) {
  const handleClick = () => { alert(specialty.key) }
  return (
    <button 
      onClick={ handleClick }
      className="
          flex
          flex-col
          items-center
          justify-center
          p-3
          border-b-2
          hover:text-neutral-800
          transition
          cursor-pointer
          border-transparent
          text-neutral-500
          mr-5
          last:mr-0
          bg-gray-100
          rounded
        "
      >
      { specialty.icon }
      <p className="text-xs mt-1">
        { specialty.title }
      </p>
    </button>
  )
}
