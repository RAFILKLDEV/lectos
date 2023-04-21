import { MenuButton, MenuS } from "@/styles/menuS";
import Link from "next/link";

export function Menu() {
  return (
    <MenuS>
      <MenuButton>
        <Link href={"/"}>Inicio</Link>
      </MenuButton>
      <MenuButton>
        <Link href={"/clinic"}>Lectos Clinico</Link>
      </MenuButton>
      <MenuButton>
        <Link href={"/"}>Lectos Pedagógico</Link>
      </MenuButton>
      <MenuButton>
        <Link href={"/"}>Lectos Altas Habilidades</Link>
      </MenuButton>
      <MenuButton>
        <Link href={"/"}>Sobre nós</Link>
      </MenuButton>
    </MenuS>
  );
}
