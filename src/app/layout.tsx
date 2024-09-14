import type { Metadata } from "next";
import "./../globals.css";
import Link from "next/link";
import Logo from "@/components/logo";
import TopMenu from "@/components/top-menu";
import WhatsappButton from "@/components/whatsapp-button";
import PagesFooter from "@/components/pages-footer";

export const metadata: Metadata = {
  title: "Medpax",
  description: "Exames e Médicos com desconto, para Ourinhos e região.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <section className="">
          <header className="container mx-auto flex items-center justify-between py-5">
            <Link className="w-44" href="/">
              <Logo />
            </Link>
            <TopMenu />
            <Link href="/cadastro">
              <button className="px-6 py-2 rounded-full bg-lime-500 text-white tracking-widest text-sm uppercase transform hover:scale-105 hover:bg-lime-400 transition-colors duration-200">
                Inscreva-se agora
              </button>
            </Link>
          </header>
        </section>
        { children }
        <WhatsappButton />
        <PagesFooter />
      </body>
    </html>
  );
}
