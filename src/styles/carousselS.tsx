"use cli";

import styled from "styled-components";

export const CarousselS = styled.div`
  height: 600px;
  width: 100%;
  background-color: yellow;
  position: relative;
`;

export const CarousselArrowLeft = styled.button`
  height: 50px;
  width: 50px;
  border: black 0px solid;
  border-radius: 50%;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 50px;
`;

export const CarousselArrowRight = styled.button`
  height: 50px;
  width: 50px;
  border: black 0px solid;
  border-radius: 50%;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  right: 50px;
`;

export const CarousselImg = styled.img`
  height: 100%;
  width: 100%;
`;
