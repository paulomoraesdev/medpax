'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from "next/image";
import Link from 'next/link';

export default function AppSlider() {
  return (
    <Splide 
      aria-label="Destaques" 
      options={{
        interval: 5000,
        autoplay: true,
        pauseOnHover: true,
        rewind: true
      }}
    >
      <SplideSlide>
        <Link href="/profissionais">
          <Image src="/slider/maisde100.webp" width={ 1366 } height={ 350 } />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link href="/regulamento">
          <Image src="/slider/desconto.webp" width={ 1366 } height={ 350 } />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Image src="/slider/secuidar.webp" width={ 1366 } height={ 350 } />
      </SplideSlide>
      <SplideSlide>
        <Link href="/para-empresas">
          <Image src="/slider/anuncie.webp" width={ 1366 } height={ 350 } />
        </Link>
      </SplideSlide>
    </Splide>
  )
}





