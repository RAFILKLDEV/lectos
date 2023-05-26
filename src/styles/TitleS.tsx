"use cli";

import { blue } from "@/colors";
import styled from "styled-components";

export const TitleS = styled.div`
  width: 1140px;
  margin-top: 20px;
`;

export const TitleTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin: 0px;
  color: ${blue};
`;

export const TitleSubTitle = styled(TitleTitle)`
  font-weight: 300;
`;
