import LabsPage from '@/components/labs-page'
import getLab from '@/lib/repositories/entry'

export const revalidate = 60

export default async function Page({ params: { id } }: any) {
  const lab = await getLab(id)

  return (
    <LabsPage lab={lab.fields ?? {}} />
  )
}
