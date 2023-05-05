"use cli";

import styled from "styled-components";

export const ProductsS = styled.div`
  height: 300px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ProductTitle = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ fontSize }: { fontSize: string }) =>
    fontSize ? fontSize : "20px"};
  padding: 20px;
`;

export const Product = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ProductImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
