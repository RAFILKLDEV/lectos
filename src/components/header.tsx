import { HeaderBar, HeaderLink, HeaderLogo, HeaderS } from "@/styles/headerS";
import Link from "next/link";

export function Header() {
  return (
    <>
      <HeaderS>
        <HeaderLogo src="https://media.discordapp.net/attachments/931731406118342676/1098290012946174035/image.png" />
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
