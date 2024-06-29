"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";

export default function AppSlider() {
  return (
    <Splide
      className="slider"
      aria-label="Destaques"
      options={{
        interval: 5000,
        autoplay: true,
        padding: "0px",
        pauseOnHover: true,
        rewind: true,
      }}
    >
      <SplideSlide>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/slider/saudeprioridade.png"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/slider/saudeprioridade_m.png"
          />
          <Image src="/slider/saudeprioridade.png" width={1366} height={350} />
        </picture>
      </SplideSlide>
      <SplideSlide>
        <Link href="/profissionais">
          <picture>
            <source media="(min-width: 768px)" srcSet="/slider/maisde100.png" />
            <source
              media="(max-width: 768px)"
              srcSet="/slider/maisde100_m.png"
            />
            <Image src="/slider/maisde100.png" width={1366} height={350} />
          </picture>
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link href="/para-empresas">
          <picture>
            <source media="(min-width: 768px)" srcSet="/slider/anuncie.webp" />
            <source media="(max-width: 768px)" srcSet="/slider/anuncie_m.png" />
            <Image src="/slider/anuncie.webp" width={1366} height={350} />
          </picture>
        </Link>
      </SplideSlide>
    </Splide>
  );
}
