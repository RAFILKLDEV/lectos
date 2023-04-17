import { Banner } from "@/components/banner";
import { Caroussel } from "@/components/caroussel";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { Products } from "@/components/products";
import { BannerS } from "@/styles/bannerS";
import { GlobalStyle } from "@/styles/globalStyles";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Menu />
      <Caroussel />
      <Banner />
      <Products />
      <BannerS>
        Atendimento Online ou Presencial
      </BannerS>
    </>
  );
}
