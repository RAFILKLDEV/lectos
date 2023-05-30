import { Caroussel } from "@/components/caroussel";
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
        <title>Lectos - Laboratório de Aprendizagem</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Menu />
      <Caroussel />
      <ProductsHome />
      <Footer />
    </>
  );
}
