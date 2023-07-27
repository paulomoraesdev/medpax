import FilterGrid from '@/components/profissionais/FilterGrid'

export default function Home() {
  return (
    <section className="grid grid-cols-2 gap-1 grid-rows-2">
      <header className="col-span-2">
        <FilterGrid />
      </header>
      <main className="mt-6">
        especialistas
      </main>
      <aside className="mt-6 ml-4">
        map
      </aside>
    </section>
  )
}
