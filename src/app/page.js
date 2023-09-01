import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero p-20">
      <div className="hero-content flex-col lg:flex-row">
        <Image src="/hero-image.jpg" width={ 300 } height={ 600 } alt="Medpax"/>
        <div>
          <h1 className="text-5xl font-bold">Um descontão pro seu bolso!</h1>
          <p className="py-6">Preços e descontos especiais para consultas médicas e exames.</p>
          <Link className="btn btn-primary" href="/regulamento">
            Consulte o regulamento
          </Link>
        </div>
      </div>
    </div>
  )
}
