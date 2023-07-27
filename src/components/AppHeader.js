import AppLogo from './AppLogo'
import AppMenu from './AppMenu'

export default function AppHeader() {
  return (
    <section className="border-b-slate-100 border-b-2 py-8">
      <div className="container flex flex-col items-start justify-between mx-auto md:flex-row max-w-7xl">
        <AppLogo />
        <AppMenu />
        <div className="items-center h-full">
            <a href="#_" className="mr-5 font-medium hover:text-gray-900">Cadastre-se</a>
        </div>
      </div>
    </section>
  )
}
