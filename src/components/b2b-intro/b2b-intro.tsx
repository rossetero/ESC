import React from "react";
import { 
    StyledIntro,
    StyledIntroImgLeft,
    StyledIntroImgRight,
    StyledIntroDiv,
    StyledIntroH2,
    StyledIntroP,
    StyledRed
} from "./b2b-intro.styled";


export const B2BIntro = () => {
    return (
        <StyledIntro>
          <div>
            <StyledIntroImgLeft src={require('../../assets/main_page/left_hand.png')} alt="открытая рука для рукопожатия" />
          </div>
          <div>
            <StyledIntroImgRight src={require('../../assets/main_page/right_hand.png')} alt="открытая рука для рукопожатия" />
          </div>

          <StyledIntroDiv>
            <StyledIntroH2><StyledRed>B2B</StyledRed> PAGE</StyledIntroH2>
            <StyledIntroP>Станьте партнёром English Speaking Club<br />и привлекайте новых клиентов!</StyledIntroP>
          </StyledIntroDiv>
        </StyledIntro>
    )
}