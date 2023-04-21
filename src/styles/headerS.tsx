"use cli";
import { blue } from "@/colors";
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
  height: 100px;
  justify-self: flex-start;
`;

export const HeaderBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLink = styled.button`
  color: ${blue};
  font-size: 20px;
  height: 30px;
  background-color: inherit;
  border: none;

  a {
    text-decoration: none;
    color: ${blue};
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 10px;
  }
`;

export const HeaderShape = styled.div`
  background-color: blue;
  height: 100px;
`;
