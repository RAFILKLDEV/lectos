import { HeaderBar, HeaderLink, HeaderLogo, HeaderS } from "@/styles/headerS";
import Link from "next/link";

export function Header() {
  return (
    <>
      <HeaderS>
        <HeaderLogo src="imgs/logo.png" />
        <HeaderBar>
          <HeaderLink>
            <Link href={"/"}>Para Colaboradores</Link>
          </HeaderLink>
        </HeaderBar>
        <HeaderBar>
          <HeaderLink>Redes Sociais</HeaderLink>
        </HeaderBar>
      </HeaderS>
    </>
  );
}
