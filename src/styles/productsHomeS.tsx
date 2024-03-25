import { blue } from "@/colors";
import styled from "styled-components";

export const ProductsHomeS = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
  height: 100vh;
`;

export const ProductsHomeText = styled.p`
  font-size: 30px;
  position: relative;
  left: -200px;
  top: 140px;
  width: 800px;
  margin: 0px;
  color: ${blue};
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
`;
