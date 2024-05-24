import React from "react";
import {
    StyledSection,
    StyledText, 
    StyledPunkt,
    StyledRed,
    StyledImg
} from "./b2b-benefits.styled";

export const B2BBenefits = () => {
    return (
        <StyledSection>
            <StyledText>English Speaking Club - встречи, где молодые люди собираются для того, чтобы улучшить
            свои разговорные навыки на английском языке. Если вы владеете баром или библиотекой и хотите привлечь
            больше посетителей, то стать партнером нашего клуба - отличная возможность для вас!<br /><br />Наш
            разговорный клуб создан в концепции edutainment, от английских “education” - обучение и “entertainment”
            - развлечение. Такой подход позволяет сочетать полезную информацию с развлекательными заданиями,
            поддерживать знания на хорошем уровне без нудного заучивания теории и скучных учебников. Только хорошая
            компания, интересные темы и много смеха!<br /><br />Что же вы получите, став партнёром English Speaking
            Club’a?</StyledText>
            <StyledPunkt>Во-первых, приток <StyledRed>новых</StyledRed> посетителей, которые будут рады
            посещать ваше заведение для проведения встреч.</StyledPunkt>
            <StyledPunkt center>Во-вторых, <StyledRed>увеличение</StyledRed> продаж, так как участники клуба
            могут стать вашими постоянными клиентами.</StyledPunkt>
            <StyledPunkt right>И, наконец, <StyledRed>продвижение</StyledRed> вас как места, поддерживающего
            образовательные и культурные инициативы.</StyledPunkt>
            <StyledImg down src={require('../../assets/main_page/arrow_down.png')} alt="стрелка к следующему пункту" />
            <StyledImg up src={require('../../assets/main_page/arrow_up.png')} alt="стрелка к следующему пункту" />
        </StyledSection>
    );
}