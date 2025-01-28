import React from "react";
import { useTranslation, Trans } from "react-i18next";
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
    const { t } = useTranslation();

    return (
        <StyledSection>
            <StyledH2>WHO <StyledRed>WE</StyledRed> ARE</StyledH2>
            <StyledP><Trans i18nKey="main.who"></Trans></StyledP>
            <StyledDiv>
                <StyledImg src={require('../../assets/main_page/heart.png')}
                    alt="рука показывающая сердце большим и указательным пальцами" />
                <WhoWeAreDiv />
            </StyledDiv>
        </StyledSection>
    );
}