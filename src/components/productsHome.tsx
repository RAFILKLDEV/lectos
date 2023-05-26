import styled from "styled-components";
import { Cards } from "./cards";
import { Title } from "./title";

export function ProductsHome() {
  const Ajust = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <Ajust>
        <Title />
      </Ajust>
      <Ajust>
        <Cards />
      </Ajust>
    </>
  );
}
