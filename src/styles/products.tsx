"use cli";

import styled from "styled-components";

export const ProductsS = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
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
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 20px;
`;
