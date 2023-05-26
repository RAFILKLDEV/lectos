import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { Products } from "@/components/products";
import { GlobalStyle } from "@/styles/globalStyles";
import Head from "next/head";
import Image from "next/image";

export default function Lectos() {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Menu />
      <Products />
      <Footer />
    </>
  );
}
