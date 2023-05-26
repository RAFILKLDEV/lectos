"use cli";

import styled from "styled-components";

export const CarousselS = styled.div`
  height: 500px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 500px;
  width: 888px;
  animation-name: transition;
  animation-duration: 1s;

  @keyframes transition {
    0% {
      opacity: 70%;
    }
    100% {
      opacity: 100%;
    }
  }
`;
