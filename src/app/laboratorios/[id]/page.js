import getLab from '@/repository/lab'

import LabsPage from '@/components/laboratorios/LabsPage'

export const revalidate = 60

export default async function Page({ params: { id } }) {
  const lab = await getLab(id)

  return (
    <section className="grid grid-cols-1 gap-1">
      {
        lab &&
        <LabsPage lab={ lab.fields } />
      }
    </section>
  )
}
