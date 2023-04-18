import {
  ProductMarketingBar,
  ProductMarketingImg,
  ProductMarketingS,
  ProductMarketingText,
  ProductMarketingTitle,
} from "@/styles/productMarketingS";

export function ProductMarketing() {
  return (
    <ProductMarketingS>
      <ProductMarketingBar>
        <ProductMarketingTitle>Teste pika</ProductMarketingTitle>
        <ProductMarketingText>
          Sim, é possível. A Tutores desenvolveu material exclusivo com esse
          objetivo. São cursos livres, de curta duração, indicados para os
          alunos que estão em busca de organização nos estudos, dicas de como
          estudar para as provas e estratégias para se sair bem em todos os
          aspectos que envolvem o dia a dia do estudante. Os cursos visam
          despertar no aluno o gosto pelo estudo, a autonomia e a autoconfiança.
          Nossos alunos se desenvolvem de forma integral e transversal, isso é,
          as técnicas aprendidas favorecem todas as matérias do currículo.
        </ProductMarketingText>
      </ProductMarketingBar>
      <ProductMarketingImg src="https://i.ytimg.com/vi/CaUlFDHRHZM/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCy2bigHxnm0Ti3bYqwSJplFtcZcw"/>
    </ProductMarketingS>
  );
}
