import { lightBlue, purple, yellow } from "@/colors";
import { BannerContainer, BannerContext, BannerInfo, BannerS, BannerText } from "@/styles/bannerS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <BannerS>
      <BannerInfo>Atendimento Presencial e Online  </BannerInfo>
      <BannerContainer>
        <BannerContext>
          <BannerInfo>Mapa do Site</BannerInfo>
          <BannerText><i className="fa-solid fa-square" style={{color: yellow}}></i> Lectos Pedagogico</BannerText>
          <BannerText><i className="fa-solid fa-square" style={{color: lightBlue}}></i> Lectos Clinico</BannerText>
          <BannerText><i className="fa-solid fa-square" style={{color: purple}}></i> Lectos Altas Habilidades</BannerText>
          <BannerText><i className="fa-solid fa-people-group"></i> Quem somos nós</BannerText>
        </BannerContext>
        <BannerContext>
          <BannerInfo>Contato</BannerInfo>
          <BannerText><i className="fa-solid fa-phone"></i> (16) 992112273</BannerText>
          <BannerText><i className="fa-regular fa-envelope"></i> lectos.aprendizagem@gmail.com</BannerText>
          <BannerText><i className="fa-solid fa-location-dot"></i> Shopping Iguatemi</BannerText>
        </BannerContext>
        <BannerContext>
          <BannerInfo>Redes Sociais</BannerInfo>
          <BannerText><i className="fa-brands fa-instagram"></i> Instagram</BannerText>
          <BannerText><i className="fa-brands fa-facebook"></i> Facebook</BannerText>
        </BannerContext>
      </BannerContainer>
    </BannerS>
  );
}
''