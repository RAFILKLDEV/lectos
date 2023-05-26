"use cli";

import { lightBlue, purple, yellow } from "@/colors";
import styled from "styled-components";

export const CardsS = styled.div`
  width: 1140px;
  background-color: white;
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 50px 0px;
`;

export const Card = styled.div`
  width: 340px;
  height: 420px;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ margin }: { margin: string }) => margin};
  box-shadow: 5px 8px 0px 5px rgba(0, 0, 0, 0.6);
`;

export const CardImg1 = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(100% 0, 100% 90%, 65% 100%, 0 85%, 0 0);
  /* background-image: url("https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg"); */
  background-color: ${lightBlue};
  margin-bottom: 40px;
  background-size: contain;
`;

export const CardImg2 = styled(CardImg1)`
  clip-path: polygon(100% 0, 100% 90%, 45% 100%, 0 85%, 0 0);
  background-color: ${purple};
`;

export const CardImg3 = styled(CardImg1)`
  clip-path: polygon(100% 0, 100% 90%, 35% 100%, 0 85%, 0 0);
  background-color: ${yellow};
`;

export const CardTitle = styled.h6`
  font-size: 17px;
  align-self: flex-start;
  margin: 0px;
  margin-left: 18px;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  width: 300px;
  font-size: 13px;
  color: #1a1a1a;
  font-weight: 1000;
  word-wrap: break-word;
  margin: 0px;
`;

export const CardLink = styled.p`
  text-decoration: underline;
  color: #ff0000db;
  font-size: 17px;
  align-self: flex-start;
  margin-left: 18px;
  font-weight: 600;
`;
