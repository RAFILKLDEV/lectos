import { BannerContainer, BannerContext, BannerInfo, BannerS, BannerText } from "@/styles/bannerS";

export function Footer() {
  return (
    <BannerS>
      <BannerInfo>Atendimento Presencial e Online  </BannerInfo>
      <BannerContainer>
        <BannerContext>
          <BannerInfo>Mapa do Site</BannerInfo>
          <BannerText>Lectos Pedagogico</BannerText>
          <BannerText>Lectos Clinico</BannerText>
          <BannerText>Lectos Altas Habilidades</BannerText>
          <BannerText>Quem somos nós</BannerText>
        </BannerContext>
        <BannerContext>
          <BannerInfo>Contato</BannerInfo>
          <BannerText>(16) 992112273</BannerText>
          <BannerText>lectos.aprendizagem@gmail.com</BannerText>
          <BannerText>Shopping Iguatemi</BannerText>
        </BannerContext>
        <BannerContext>
          <BannerInfo>Redes Sociais</BannerInfo>
          <BannerText>Instagram</BannerText>
          <BannerText>Facebook</BannerText>
        </BannerContext>
      </BannerContainer>
    </BannerS>
  );
}
