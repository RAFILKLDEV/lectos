"use cli";

import styled from "styled-components";
import { blue } from "@/colors";

export const MenuS = styled.div`
  background-color: ${blue};
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const MenuButton = styled.button`
  color: white;
  font-size: 16px;
  height: 30px;
  background-color: inherit;
  border: none;

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    @keyframes go-back {
      0% {
        text-decoration: underline;
        text-underline-offset: 6px;
        text-decoration-thickness: 4px;
      }
      100% {
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-thickness: 2px;
      }
    }
    animation-name: go-back;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;
