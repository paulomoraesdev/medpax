import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import HomeCall from "@/components/home-call";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <React.Fragment>
      <section className="bg-gradient-to-tr from-teal-400 to-sky-400 h-72 pt-10">
        <div className="container mx-auto flex flex-col items-center justify-center h-full">
          <h1 className="text-black font-bold text-center text-4xl max-w-2/3 mx-auto -mt-10">Sua saúde é nossa prioridade</h1>
          <p className="text-black text-center max-w-2/3 mx-auto">
            mais de cem clínicas e laboratórios em nossa cidade.
          </p>
        </div>
      </section>
      <section className="container mx-auto -mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          <Link href="/profissionais" title="Profissionais">
            <WobbleCard>
              <h2 className="font-bold text-lg">Médicos</h2>
              <p>
                Conheça os profissionais que fazem parte do plano.
              </p>
            </WobbleCard>
          </Link>
          <Link href="/laboratorios" title="Laboratórios">
            <WobbleCard>
              <h2 className="font-bold text-lg">Exames</h2>
              <p>
                Conheça os laboratórios e os exames disponíveis para conveniados.
              </p>
            </WobbleCard>
          </Link>
          <Link href="/parceiros" title="Parceiros">
            <WobbleCard>
              <h2 className="font-bold text-lg">Parceiros</h2>
              <p>
                Conheça quem são as empresas parceiras Medpax.
              </p>
            </WobbleCard>
          </Link>
        </div>
      </section>
      {/* <section className="container mx-auto my-5">
        <Link href="#" target="_blank">
          <Image
            src="https://http2.mlstatic.com/D_NQ_759934-MLA80205441349_102024-OO.webp"
            alt="Promoções"
            width={1200}
            height={500}
          />
        </Link>
      </section> */}
      <HomeCall />
    </React.Fragment>
  );
}
