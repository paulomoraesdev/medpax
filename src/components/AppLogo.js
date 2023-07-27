import Image from 'next/image'
import Link from 'next/link'

export default function AppLogo() {
  return (
    <Link href="/">
      <Image
        src="/vercel.svg"
        alt="MedPax"
        width={ 100 }
        height={ 24 }
        priority
      />
    </Link>
  )
}
