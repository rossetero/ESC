import React from "react"
import { useTranslation, Trans } from "react-i18next"
import { 
  StyledIntro,
  StyledIntroImgLeft,
  StyledIntroImgRight,
  StyledIntroDiv,
  StyledIntroH2,
  StyledIntroP,
  StyledRed
} from "./b2b-intro.styled"


export const B2BIntro = () => {
  const { t } = useTranslation()

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
        <StyledIntroP><Trans>{t('b2b.intro')}</Trans></StyledIntroP>
      </StyledIntroDiv>
    </StyledIntro>
  )
}