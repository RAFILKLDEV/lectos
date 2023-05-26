import {
  Product,
  ProductImg,
  ProductTitle,
  ProductsBar,
  ProductsS,
} from "@/styles/products";
import Image from "next/image";

export function Products() {
  return (
    <>
      <ProductsS>
        <Image alt="Lectos" src={"/imgs/Logo.png"} width={600} height={200} />
        <ProductsBar>

        <Product>
          <ProductImg src="imgs\Leitura.png" />
          <ProductTitle fontSize="">Leitura</ProductTitle>
        </Product>
        <Product>
          <ProductImg src="imgs\escrita.png" />
          <ProductTitle fontSize="">Escrita</ProductTitle>
        </Product>
        <Product>
          <ProductImg src="imgs\cognição.png" />
          <ProductTitle fontSize="">Cognição</ProductTitle>
        </Product>
        <Product>
          <ProductImg src="imgs\Tecnologia.png" />
          <ProductTitle fontSize="">Tecnologia</ProductTitle>
        </Product>
        <Product>
          <ProductImg src="imgs\Orientação.png" />
          <ProductTitle fontSize="">Orientação</ProductTitle>
        </Product>
        <Product>
          <ProductImg src="imgs\Socialização.png" />
          <ProductTitle fontSize="">Socialização</ProductTitle>
        </Product>
        </ProductsBar>
      </ProductsS>
    </>
  );
}
