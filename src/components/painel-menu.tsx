"use client";

import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";
import { Home } from "lucide-react";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

export default function PainelMenu() {
  const router = useRouter();
  async function handleLogout() {
    const response = await logout();
    if (response) window.location.href = '/admin/login';
  }
  return (
    <React.Fragment>
      <Menubar>
        <Link className="px-2" href="/admin/painel">
          <Home size={ 18 } />
        </Link>
        <MenubarMenu>
          <MenubarTrigger>Profissionais</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/admin/painel/profissionais">
                Ver todos
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/admin/painel/profissionais/categorias">
                Categorias
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarSeparator />
        <MenubarMenu>
          <MenubarTrigger>Laboratórios</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/admin/painel/laboratorios">
                Ver todos
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/admin/painel/laboratorios/categorias">
                Categorias
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarSeparator />
        <MenubarMenu>
          <MenubarTrigger>Parceiros</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/admin/painel/parceiros">
                Ver todos
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/admin/painel/parceiros/categorias">
                Categorias
              </Link>
            </MenubarItem>
          </MenubarContent>
          <Link className="px-2 text-sm" href="/admin/painel/usuarios">
            Usuários
          </Link>
        </MenubarMenu>
      </Menubar>

      <form onSubmit={ handleLogout }>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Sair</button>
      </form>
    </React.Fragment>
  )
}