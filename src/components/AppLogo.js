import Image from 'next/image'
import Link from 'next/link'

export default function AppLogo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="MedPax"
        width={ 150 }
        height={ 24 }
        priority
      />
    </Link>
  )
}
