import getLabs from '@/repository/labs'

import LabsWrapper from '@/components/laboratorios/LabsWrapper'

export const revalidate = 60

export default async function Page() {
  const labs = await getLabs()

  return (
    <section className="grid grid-cols-1 gap-1">
      <LabsWrapper labs={ labs.items ?? [] } />
    </section>
  )
}
