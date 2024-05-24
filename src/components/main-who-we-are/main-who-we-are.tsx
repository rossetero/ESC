import React from "react";
import {
    StyledSection,
    StyledH2,
    StyledRed,
    StyledP,
    StyledDiv,
    StyledImg
} from "./main-who-we-are.styled";
import { WhoWeAreDiv } from "../who-we-are-div";

export const MainWhoWeAre = () => {
    return (
        <StyledSection>
            <StyledH2>WHO <StyledRed>WE</StyledRed> ARE</StyledH2>
            <StyledP>English Speaking Club - это место, где молодые люди собираются каждую неделю, чтобы
            практиковать английский язык в дружеской и непринужденной обстановке. Мы организуем встречи в барах,
            библиотеках и других уютных местах, где каждый может свободно общаться на английском, делиться
            историями, смеяться и проводить время с единомышленниками.<br /><br />Наша цель - создать комфортную
            среду для изучения языка,
            где каждый может чувствовать себя как дома.
            </StyledP>
            <StyledDiv>
                <StyledImg src={require('../../assets/main_page/heart.png')}
                    alt="рука показывающая сердце большим и указательным пальцами" />
                <WhoWeAreDiv />
            </StyledDiv>
        </StyledSection>
    );
}