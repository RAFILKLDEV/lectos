"use cli";

import { blue, yellow } from "@/colors";
import styled from "styled-components";

export const BannerS = styled.div`
  background-color: ${blue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  clip-path: polygon(
    62% 5%, 72% 6%, 90% 9%, 100% 11%, 100% 100%, 50% 100%, 0 100%, 0 0, 14% 1%, 39% 3%
  );
  padding: 20px 0px 70px;
`;

export const BannerInfo = styled.div`
  font-size: 22px;
  color: white;
  margin-top: 30px;
`;

export const BannerButton = styled.div`
  width: 100px;
  height: 30px;
  background-color: ${yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border-radius: 5px;
  padding: 5px 20px;
  font-weight: 700;
  color: white;
  margin-top: 10px;
`;

export const BannerText = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 300px 200px;
  justify-content: center;
  gap: 100px;
`
export const BannerContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 20px;
`

