import styled from "styled-components";
import { Cards } from "./cards";
import { Title } from "./title";
import { TitleSubTitle } from "@/styles/TitleS";
import { ProductsHomeS, ProductsHomeText } from "@/styles/productsHomeS";

export function ProductsHome() {
  return (
    <>
      <ProductsHomeS>
        <Title />
        <ProductsHomeText>
          A Lectos é inovadora, dedicada a promover a excelência educacional
          por meio de soluções especializadas.
        </ProductsHomeText>
      </ProductsHomeS>
      <ProductsHomeS>
        <Cards />
      </ProductsHomeS>
    </>
  );
}
