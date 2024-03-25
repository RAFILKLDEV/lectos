import { FaqBar, FaqBigDesc, FaqBigTitle, FaqCard, FaqContainer, FaqDesc, FaqIcon, FaqS, FaqTitle } from "@/styles/faqS";

export function Faq() {
    return <>
        <FaqS>
            <FaqBar>
                <FaqBigTitle>Perguntas Frequentes</FaqBigTitle>
                <FaqBigDesc>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy text</FaqBigDesc>
            </FaqBar>
            <FaqContainer>
                <FaqCard>
                    <FaqIcon src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" />
                    <FaqBar>
                        <FaqTitle>Como contratar a LECTOS</FaqTitle>
                        <FaqDesc>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            Lorem Ipsum.</FaqDesc>
                    </FaqBar>
                </FaqCard>
                <FaqCard>
                    <FaqIcon src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" />
                    <FaqBar>
                        <FaqTitle>Como contratar a LECTOS</FaqTitle>
                        <FaqDesc>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            Lorem Ipsum.</FaqDesc>
                    </FaqBar>
                </FaqCard>
                <FaqCard>
                    <FaqIcon src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" />
                    <FaqBar>
                        <FaqTitle>Como contratar a LECTOS</FaqTitle>
                        <FaqDesc>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            Lorem Ipsum.</FaqDesc>
                    </FaqBar>
                </FaqCard>
            </FaqContainer>
        </FaqS>
    </>
}