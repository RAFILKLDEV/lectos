import { yellow } from "@/colors"
import styled from "styled-components"

export function CardsTeste() {

    const CardTesteS = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        height: auto;
    `

    const CardContainer = styled.div`
        height: 400px;
        width: 250px;
        margin-top: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    `

    const CardContainer2 = styled(CardContainer)`
        margin-top: -300px;
    `

    const CardImg = styled.img`
        height: 250px;
        width: 250px;
        border-radius: 50%;
    `

    const CardText = styled.div`
        width: 300px;
        padding: 0px 15px;
        font-size: 15px;
        text-align: center;
        font-weight: 600;
        color: #5c5c5c;
    `
    const CardTitle = styled(CardText)`
        font-size: 20px;
        color: black;
    `

    return (
        <>
            <CardTesteS>
                <CardContainer>
                    <CardImg src="imgs/teste.png"></CardImg>
                    <CardTitle>Lectos Altas Habilidades</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum.</CardText>
                </CardContainer>
                <CardContainer2>
                    <CardImg src="imgs/teste.png"></CardImg>

                    <CardTitle>Lectos Altas Habilidades</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum.</CardText>
                </CardContainer2>
                <CardContainer>
                    <CardImg src="imgs/teste.png"></CardImg>

                    <CardTitle>Lectos Altas Habilidades</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum.</CardText>
                </CardContainer>
            </CardTesteS>
        </>
    )
}