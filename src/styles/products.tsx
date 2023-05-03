"use cli";

import styled from "styled-components";

export const ProductsS = styled.div`
  height: 300px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const ProductTitle = styled.div`
  font-size: 20px;
`;

export const Product = styled.div`
  height: 200px;
  width: 250px;
  background-color: ${({ color }) => (color ? color : "black")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const ProductImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
