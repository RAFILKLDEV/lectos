import { Caroussel } from "@/components/caroussel";
import { CardsTeste } from "@/components/componenteTest";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { ProductsHome } from "@/components/productsHome";
import { GlobalStyle } from "@/styles/globalStyles";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/95597c6e4a.js"></script>
        <title>Lectos - Laboratório de Aprendizagem</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Menu />
      <Caroussel />
      <Faq />
      {/* <ProductsHome /> */}
      <CardsTeste></CardsTeste>
      <Footer />
    </>
  );
}
