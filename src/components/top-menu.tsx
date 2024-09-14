import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

function MenuItem({ href, title }: { href: string, title: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link className="hover:text-lime-600" href={ href } title={ title }>
          { title }
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default function TopMenu() {
  return (
    <NavigationMenu className="flex-grow mr-1">
      <NavigationMenuList className="flex items-center justify-end gap-5">
        <MenuItem href="/profissionais" title="Médicos" />
        <MenuItem href="/laboratorios" title="Exames" />
        <MenuItem href="/parceiros" title="Parceiros" />
        <MenuItem href="/plano-familiar" title="Plano Familiar" />
        <MenuItem href="/plano-empresarial" title="Plano Empresarial" />
      </NavigationMenuList>
    </NavigationMenu>
  )
}