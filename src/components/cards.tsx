import {
  Card,
  CardImg1,
  CardImg2,
  CardTitle,
  CardsS,
  CardText,
  CardLink,
  CardImg3,
} from "@/styles/cardsS";

export function Cards() {
  return (
    <>
      <CardsS>
        <Card margin="30px">
          <CardImg3 />
          <CardTitle>Departamento Altas Habilidades</CardTitle>
          <CardText>
            Descubra um mundo de possibilidades através de Tecnlogia e
            impulsione o desenvolvimento de altas habilidades do seu filho.
          </CardText>
          <CardLink>Leia mais...</CardLink>
        </Card>

        <Card margin="150px">
          <CardImg2 />
          <CardTitle>Departamento Pedagógico</CardTitle>
          <CardText>
            Uma equipe de professores dedicados a criar um ambiente de
            aprendizagem estimulante e profissional em oferecer suporte
            educacional de qualidade.
          </CardText>
          <CardLink>Leia mais...</CardLink>
        </Card>

        <Card margin="250px">
          <CardImg1 />
          <CardTitle>Departamento Clinico</CardTitle>
          <CardText>
            Referência em diagnósticos psicopedagógicos, com análises
            especializadas em desvendar o potencial de aprendizagem de cada
            indivíduo.
          </CardText>
          <CardLink>Leia mais...</CardLink>
        </Card>
      </CardsS>
    </>
  );
}
