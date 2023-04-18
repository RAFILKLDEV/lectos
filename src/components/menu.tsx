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
      <MenuButton>Lectos Pedagógico</MenuButton>
      <MenuButton>Lectos Altas Habilidades</MenuButton>
      <MenuButton>Sobre Lectos</MenuButton>
    </MenuS>
  );
}
