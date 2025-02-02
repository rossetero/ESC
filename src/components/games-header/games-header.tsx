import React from "react";
import { Caption } from "../caption";
import { 
    StyledImg,
    StyledP,
    StyledDiv,
    StyledDivDiv
} from "./games-header.styled"
import { useTranslation, Trans } from "react-i18next";

export const GamesHeader = () => {
    const { t } = useTranslation();
    
    return (
        <StyledDiv>
            <StyledImg src={require("../../assets/games/games1.png")} alt="" />
            <StyledDivDiv>
                <Caption><h1>GAMES <span>4U</span></h1></Caption>
                <StyledP><Trans>{t('games')}</Trans></StyledP>
            </StyledDivDiv>
        </StyledDiv>
    )
}