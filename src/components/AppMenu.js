import Link from "next/link";

export default function AppMenu() {
  return (
    <nav className="flex flex-wrap items-center justify-center md:pl-6 md:ml-6 text-base md:mr-auto mt-5 md:mt-0">
      <Link
        href="/profissionais"
        className="mr-5 font-medium text-gray-500 hover:text-gray-900"
      >
        Profissionais
      </Link>
      <Link
        href="/laboratorios"
        className="mr-5 font-medium text-gray-500 hover:text-gray-900"
      >
        Laboratórios
      </Link>
      <Link
        href="/parceiros"
        className="mr-5 font-medium text-gray-500 hover:text-gray-900"
      >
        Parceiros
      </Link>
      <Link
        href="/regulamento"
        className="mr-5 font-medium text-gray-500 hover:text-gray-900"
      >
        Regulamento
      </Link>
      <Link
        href="/para-empresas"
        className="font-medium text-gray-500 hover:text-gray-900"
      >
        Para Empresas
      </Link>
    </nav>
  );
}
