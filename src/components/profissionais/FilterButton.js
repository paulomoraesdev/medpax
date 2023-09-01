'use client'

export default function FilterButton({ handleClick, active, variant, children }) {
  const colors = variant === "clear"
    ? {
      bg: {
        base: "bg-sky-800",
        hover: "bg-sky-600"
      },
      text: {
        base: "text-white",
        hover: "text-white"
      }
    } : {
      bg: {
        base: active ? "bg-gray-800" : "bg-gray-100",
        hover: "bg-sky-600"
      },
      text: {
        base: active ? "text-neutral-100" : "text-neutral-800",
        hover: "text-white"
      }
    };
  
  return (
    <button 
      onClick={ handleClick }
      className={ `
        flex
        items-center
        justify-start
        p-3
        border-b-2
        ${colors.bg.base}
        ${colors.text.base}
        hover:${colors.bg.hover}
        hover:${colors.text.hover}
        transition
        cursor-pointer
        border-transparent
        rounded
      `}
    >
      { children }
    </button>
  )
}
