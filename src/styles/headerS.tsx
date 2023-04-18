"use cli";
import styled from "styled-components";

export const HeaderS = styled.div`
  background-color: white;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderLogo = styled.img`
  height: 80px;
  justify-self: flex-start;
`;

export const HeaderBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLink = styled.button`
  background-color: inherit;
  border: none;
  color: black;
  font-size: 18px;
`;
