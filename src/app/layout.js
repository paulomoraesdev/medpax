import "./globals.css";
import { Open_Sans } from "next/font/google";

import { FilterProvider } from "@/providers/FilterProvider";
import { LabFilterProvider } from "@/providers/LabFilterProvider";
import { CompanyFilterProvider } from "@/providers/CompanyFilterProvider";

import AppHeader from "@/components/AppHeader";
import AppWhastapp from "@/components/AppWhastapp";
import AppContent from "@/components/AppContent";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Medpax",
  description: "Exames e Médicos com desconto, para Ourinhos e região.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={font.className}>
        <AppHeader />
        <AppWhastapp />
        <FilterProvider>
          <LabFilterProvider>
            <CompanyFilterProvider>
              <AppContent>{children}</AppContent>
            </CompanyFilterProvider>
          </LabFilterProvider>
        </FilterProvider>
      </body>
    </html>
  );
}
