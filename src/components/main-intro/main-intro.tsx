import React from "react";
import { 
    StyledIntro,
    StyledIntroH1,
    StyledRed,
    StyledIntroP,
    StyledIntroDiv, 
    StyledIntroImg
} from "./main-intro.styled";

export const MainIntro = () => {
    return (
        <StyledIntro>
            <StyledIntroH1><StyledRed>ENGLISH<br /></StyledRed>SPEAKING<br />CLUB</StyledIntroH1>
            <StyledIntroP>Место, где молодёжь собирается для общения на английском, веселых встреч и новых
            друзей.<br /><br />Лучший способ практики языка!<br />(с) основатель стартапа</StyledIntroP>
            <StyledIntroDiv>
                <StyledIntroImg src={require('../../assets/main_page/koza.jpg')} alt="рисунок для главной страницы" />
            </StyledIntroDiv>
        </StyledIntro>
    )
}