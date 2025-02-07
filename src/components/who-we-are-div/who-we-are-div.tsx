import React from "react"
import { useTranslation } from "react-i18next"
import {
  StyledGlobalDiv,
  StyledDiv,
  StyledH2,
  StyledP,
  StyledRed,
  StyledLosung
} from "./who-we-are-div.styled"

export const WhoWeAreDiv = () => {
  const { t } = useTranslation()

  return (
    <StyledGlobalDiv>
      <StyledDiv>
        <StyledH2>1</StyledH2>
        <StyledP>{t('main.who.list1')}</StyledP>
      </StyledDiv>
      <StyledDiv>
        <StyledH2>2</StyledH2>
        <StyledP>{t('main.who.list2')}</StyledP>
      </StyledDiv>
      <StyledDiv>
        <StyledH2>3</StyledH2>
        <StyledP>{t('main.who.list3')}</StyledP>
      </StyledDiv>
      <StyledDiv>
        <StyledH2>4</StyledH2>
        <StyledP>{t('main.who.list4')}</StyledP>
      </StyledDiv>
      <StyledLosung><StyledRed>HEY,</StyledRed> LET&apos;S GO</StyledLosung>
    </StyledGlobalDiv>
  )
}