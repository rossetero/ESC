import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { 
    StyledIntro,
    StyledIntroH1,
    StyledRed,
    StyledIntroP,
    StyledIntroDiv, 
    StyledIntroImg
} from "./main-intro.styled";

export const MainIntro = () => {
    const { t } = useTranslation();

    return (
        <StyledIntro>
            <StyledIntroH1><StyledRed>ENGLISH<br /></StyledRed>SPEAKING<br />CLUB</StyledIntroH1>
            <StyledIntroP><Trans>{t('main.intro')}</Trans></StyledIntroP>
            <StyledIntroDiv>
                <StyledIntroImg src={require('../../assets/main_page/koza.jpg')} alt="рисунок для главной страницы" />
            </StyledIntroDiv>
        </StyledIntro>
    )
}