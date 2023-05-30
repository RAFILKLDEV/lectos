import {
  Product,
  ProductDescBar,
  ProductDescDetail,
  ProductDescImg,
  ProductDescTitle,
  ProductImg,
  ProductTitle,
  ProductsBar,
  ProductsS,
} from "@/styles/products";
import Image from "next/image";
import { ProductDesc, ProductDescParagrath } from "../styles/products";

export function Products() {
  return (
    <>
      <ProductsS>
        <Image alt="Lectos" src={"/imgs/Logo.png"} width={600} height={200} />
        <ProductsBar>

          <Product>
            <ProductImg src="imgs\Leitura.png" />
            <ProductTitle fontSize=""><b>L</b>eitura</ProductTitle>
          </Product>
          <Product>
            <ProductImg src="imgs\escrita.png" />
            <ProductTitle fontSize=""><b>E</b>scrita</ProductTitle>
          </Product>
          <Product>
            <ProductImg src="imgs\cognição.png" />
            <ProductTitle fontSize=""><b>C</b>ognição</ProductTitle>
          </Product>
          <Product>
            <ProductImg src="imgs\Tecnologia.png" />
            <ProductTitle fontSize=""><b>T</b>ecnologia</ProductTitle>
          </Product>
          <Product>
            <ProductImg src="imgs\Orientação.png" />
            <ProductTitle fontSize=""><b>O</b>rientação</ProductTitle>
          </Product>
          <Product>
            <ProductImg src="imgs\Socialização.png" />
            <ProductTitle fontSize=""><b>S</b>ocialização</ProductTitle>
          </Product>
        </ProductsBar>
      </ProductsS>
      <ProductDesc>
        <ProductDescBar>
          <ProductDescDetail>{" k"}</ProductDescDetail>
          <ProductDescTitle>Leitura</ProductDescTitle>
          <ProductDescParagrath> Na Lectos, a leitura é valorizada como um portal para o conhecimento, a imaginação e a descoberta de novos horizontes. Através de um ambiente rico em livros e atividades de leitura, incentivamos os alunos a explorar diferentes gêneros, expandir seu vocabulário e cultivar o prazer pela leitura ao longo da vida.</ProductDescParagrath>
        </ProductDescBar>
        <ProductDescImg src="/imgs/leitura.png" height={200} />
      </ProductDesc>
    </>
  );
}
