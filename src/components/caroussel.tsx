import { CarousselArrowLeft, CarousselArrowRight, CarousselS } from "@/styles/carousselS";

export function Caroussel() {
    return <CarousselS>
        <CarousselArrowRight>{">"}</CarousselArrowRight>
        <CarousselArrowLeft>{"<"}</CarousselArrowLeft>
    </CarousselS>
}