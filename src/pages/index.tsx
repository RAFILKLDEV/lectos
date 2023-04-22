import { Banner } from "@/components/banner";
import { Caroussel } from "@/components/caroussel";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { Products } from "@/components/products";
import { GlobalStyle } from "@/styles/globalStyles";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lectos - Laboratório de Aprendizagem</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <GlobalStyle />
      <Header />
      <Menu />
      <Caroussel />
      <Banner />
      <Products />
      <Footer />
    </>
  );
}
