"use cli";

import {
  CarousselArrowLeft,
  CarousselArrowRight,
  CarousselImg,
  CarousselS,
} from "@/styles/carousselS";
import { useEffect, useState } from "react";

export function Caroussel() {
  const photos = [
    "https://cmspim.cogna.digital/unime/public/styles/baixa/public/2019-11/curso-pedagogia.jpg?itok=RQ52FcCi",
    "https://recantodosol.net/wp-content/uploads/2018/12/pedadogia.jpg",
    "https://www.wreducacional.com.br/img_cursos/prod/img_1230x644/educacao/pedagogia-e-educacao-infantil.jpg",
  ];

  const [img, setImg] = useState(photos[0]);

  function timerImg() {
    setTimeout(() => {
      if (img === photos[0]) {
        setImg(photos[1]);
      } else if (img === photos[1]) {
        setImg(photos[2]);
      } else if (img === photos[2]) {
        setImg(photos[0]);
      }
    }, 2000);
  }

  useEffect(() => {
    timerImg();
  }, [img]);
  return (
    <CarousselS>
      <CarousselImg src={img} />
      <CarousselArrowRight>{">"}</CarousselArrowRight>
      <CarousselArrowLeft>{"<"}</CarousselArrowLeft>
    </CarousselS>
  );
}
