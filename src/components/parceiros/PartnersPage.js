"use client";

import PartnersCard from "./PartnersCard";
import AppGallery from "../AppGallery";
import { useState } from "react";
import Link from "next/link";
import { IconHome } from "@tabler/icons-react";
import { redirect } from "next/navigation";

export default function PartnersPage({ partner }) {
  const [loaded, setLoaded] = useState(false);

  const testAssinatura = () =>
    new Promise((resolve) => {
      if (!partner.assinante) redirect("/parceiros");
      else resolve();
    });

  testAssinatura().then(() => setLoaded(true));

  return (
    <>
      {loaded && (
        <main>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link href="/parceiros">
                  <IconHome size={14} className="mr-2" /> Parceiros
                </Link>
              </li>
              <li>{partner.name}</li>
            </ul>
          </div>
          <PartnersCard partner={partner} notClickable />
          <hr />
          {partner.galeria?.length > 0 && (
            <AppGallery gallery={partner.galeria} />
          )}
        </main>
      )}
    </>
  );
}
