import AppLogo from './AppLogo'
import AppMenu from './AppMenu'
import SignupButton from './SignupButton'

export default function AppHeader() {
  return (
    <section className="border-b-slate-100 border-b-2 py-8">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row max-w-7xl">
        <AppLogo />
        <AppMenu />
        <SignupButton />
      </div>
    </section>
  )
}
