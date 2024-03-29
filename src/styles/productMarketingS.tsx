import { blue } from "@/colors";
import styled from "styled-components";

export const ProductMarketingS = styled.div`
  height: 400px;
  /* width: 95%; */
  background-color: rgb(63, 150, 179);
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-start;
  gap: 50px;
  color: white;
  margin: 50px 0px;
  /* border-radius: ${({ border }: { border: string }) => {
    if (border === "top") {
      return "0px 50px 0px 0px";
    } else if (border === "bot") {
      return "0px 50px 50px 0px";
    }
  }}; */
`;

export const ProductMarketingBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  display: inline-block;
  padding-bottom: 30px;
  opacity: 0%;
  animation: aparecer 1s ease-in forwards;

  @keyframes aparecer {
  to {
    opacity: 100%;
    padding-bottom: 0px;
  }
}
`;

export const ProductMarketingTitle = styled.h4`
  font-size: 25px;
  margin: 0px;
`;

export const ProductMarketingText = styled.p`
  width: 500px;
  height: 300px;
`;

export const ProductMarketingImg = styled.img`
  height: 300px;
  width: 400px;
  padding-bottom: 30px;
  opacity: 0%;
  animation: aparecer 1s ease-in forwards;

  @keyframes aparecer {
  to {
    opacity: 100%;
    padding-bottom: 0px;
  }
}
  
`;
