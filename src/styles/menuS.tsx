"use cli";

import styled from "styled-components";
import { blue } from "@/colors";

export const MenuS = styled.div`
  background-color: ${blue};
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const MenuButton = styled.button`
  color: white;
  font-size: 20px;
  height: 30px;
  background-color: inherit;
  border: none;

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 10px;
  }
`;
