import Link from 'next/link'

export default function AppMenu() {
  return (
    <nav className="flex flex-wrap items-center justify-center pl-6 ml-6 text-base border-l border-gray-200 md:mr-auto">
      <Link href="/profissionais" className="mr-5 font-medium text-gray-500 hover:text-gray-900">Profissionais</Link>
      <Link href="/exames" className="mr-5 font-medium text-gray-500 hover:text-gray-900">Exames</Link>
      <Link href="/como-funciona" className="font-medium text-gray-500 hover:text-gray-900">Como Funciona?</Link>
    </nav>
  )
}
