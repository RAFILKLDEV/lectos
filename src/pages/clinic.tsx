import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { ProductMarketing } from "@/components/productMarketing";
import { GlobalStyle } from "@/styles/globalStyles";

export default function Clinic() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Menu />
      <ProductMarketing />
    </>
  );
}
