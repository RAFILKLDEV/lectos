"use cli";

import { blue, yellow } from "@/colors";
import styled from "styled-components";

export const BannerS = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${blue};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const BannerInfo = styled.div`
  padding: 0px;
  font-size: 22px;
  color: white;
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
