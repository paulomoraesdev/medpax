import { LabsContext } from "@/providers/labs-provider";
import React from "react";

export default function LabsFilter({ categories }: { categories: Array<any> }) {
  const { filters, setFilters }: any = React.useContext(LabsContext);

  const sortedCategories = categories.sort((a, b) => a.fields.nome.localeCompare(b.fields.nome))

  const handleClick = (id: string) => {
    if (filters.includes(id)) {
      setFilters(filters.filter((filter: string) => filter !== id))
    } else {
      setFilters([ ...filters, id ])
    }
  }
  return (
    <div className="justify-start grid gap-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
      {
        sortedCategories.map((category: any) => {
          const btnClass = filters.includes(category.fields.key) ? "bg-lime-400 hover:bg-lime-500" : "bg-gray-200 hover:bg-gray-300";
          return (
            <button className={ `py-2 px-5 rounded ${btnClass}` } onClick={ () => handleClick(category.fields.key) } key={ category.sys.id }>
              { category.fields.nome }
            </button>
          )
        })
      }
      {
        filters.length > 0 && (
          <button
            onClick={ () => setFilters([]) }
            className="px-5 py-2.5 rounded-md text-sm tracking-wider font-medium outline-none bg-teal-700 hover:bg-teal-900 text-white transition-all duration-300"
          >
            Limpar Filtro
          </button>
        )
      }
    </div>
  )
}