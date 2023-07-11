import {
  ProductMarketingBar,
  ProductMarketingImg,
  ProductMarketingS,
  ProductMarketingText,
  ProductMarketingTitle,
} from "@/styles/productMarketingS";
import { useRef } from "react";

export function ProductMarketing() {

  const ref = useRef()

  return (
    <>
      <ProductMarketingS border={"bot"}>
        <ProductMarketingBar>
          <ProductMarketingTitle>Lectos Clinico</ProductMarketingTitle>
          <ProductMarketingText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </ProductMarketingText>
        </ProductMarketingBar>
        <ProductMarketingImg src="https://blog.portalpos.com.br/app/uploads/2021/03/Menina-jovem-aparentemente-se-consultando-com-uma-psicologa-ou-pedagoga-1024x683.jpg" />
      </ProductMarketingS>
      <ProductMarketingS ref={ref} border="bot"></ProductMarketingS>
    </>
  );
}
