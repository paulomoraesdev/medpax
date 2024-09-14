import Link from "next/link";
import home1 from "@/assets/home1.png"
import home2 from "@/assets/home2.png"
import Image from "next/image";

export default function HomeCall() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
              <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                  <div className="overflow-hidden aspect-w-3 aspect-h-4">
                    <Image className="object-cover object-top origin-top scale-150" width={ 450 } height={ 300 }  src={home1} alt="" />
                  </div>

                  <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                  <Image className="h-full w-full object-cover object-center" width={ 550 } height={ 550 }  src={home2} alt="" />
                  </div>
              </div>

              <div className="flex flex-col items-start xl:px-16">
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Torne-se uma empresa parceira</h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">Anuncie sua marca, seja visto e inclua gratuitamente e sem carência seus funcionários no plano Medpax.</p>

                  <Link href="/plano-empresarial" title="Plano Empresarial" className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-lime-400 to-teal-600" role="button">
                      Quero saber mais!
                      <svg className="w-5 h-5 ml-8 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                  </Link>
              </div>
          </div>
      </div>
    </section>
  )
}