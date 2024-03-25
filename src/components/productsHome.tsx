import { Cards } from "./cards";
import { Title } from "./title";
import { ProductsHomeS, ProductsHomeText } from "@/styles/productsHomeS";

export function ProductsHome() {
  return (
    <>
      <ProductsHomeS>
        <Title />
        <ProductsHomeText>
          Centro Educacional, com Programas Personalizados / para
          desenvolvimento de habilidades acadêmicas, socioemocionais e
          tecnológicas / em crianças, adolescentes e adultos.
        </ProductsHomeText>
      </ProductsHomeS>
      <ProductsHomeS>
        <Cards />
      </ProductsHomeS>
    </>
  );
}
