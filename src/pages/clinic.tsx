import { Header } from "@/components/header";
import { MainHeader } from "@/components/mainComponents/MainHeader";
import { Menu } from "@/components/menu";
import { ProductMarketing } from "@/components/productMarketing";
import { GlobalStyle } from "@/styles/globalStyles";
import Head from "next/head";

export default function Clinic() {
  return (
    <>
      <Head>
        <title>Lectos Clinico</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@200&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <Header />
      <MainHeader />
      <Menu />
      <ProductMarketing />
    </>
  );
}
