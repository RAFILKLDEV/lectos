import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { ProductMarketing } from "@/components/productMarketing";
import { GlobalStyle } from "@/styles/globalStyles";
import Head from "next/head";

export default function Clinic() {
  return (
    <>
      <Head>
        <title>Departamento Clinico</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Menu />
      <ProductMarketing />
    </>
  );
}
