import { MenuButton, MenuS } from "@/styles/menuS";
import Link from "next/link";

export function Menu() {
  return (
    <MenuS>
      <MenuButton>
        <Link href={"/"}>Inicio</Link>
      </MenuButton>
      <MenuButton>
        <Link href={"/clinic"}>Departamento Clinico</Link>
      </MenuButton>
      <MenuButton>
        <Link href={"/"}>Departamento Pedagógico</Link>
      </MenuButton>
      <MenuButton>
        <Link href={"/"}>Departamento Altas Habilidades</Link>
      </MenuButton>
      <MenuButton>
        <Link href={"/lectos"}>Sobre nós</Link>
      </MenuButton>
    </MenuS>
  );
}
