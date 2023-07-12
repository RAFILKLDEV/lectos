import { lightBlue } from "@/colors";
import styled from "styled-components";

export const FaqS = styled.div`
    height: 100vh;
    width: 100%;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

export const FaqContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 450px 450px;
    grid-template-rows: 130px 130px;
    column-gap: 60px;
    align-items: center;
    justify-content: center;
`

export const FaqBigTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FaqBigDesc = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #757575;
`

export const FaqCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 130px;
    gap: 10px;
`

export const FaqBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const FaqTitle = styled.h5`
    font-size: 14px;
    margin: 0px;
    font-weight: 600;
`

export const FaqDesc = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #707070;
`

export const FaqIcon = styled.img`
    height: 35px;
    width: 35px;
    align-self: flex-start;
    margin-top: 20px;
    padding: 10px;
    background-color: ${lightBlue};
`