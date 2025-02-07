import React from "react"
import { useTranslation, Trans } from "react-i18next"
import {
  StyledSection,
  StyledText, 
  StyledPunkt,
  StyledImg
} from "./b2b-benefits.styled"

export const B2BBenefits = () => {
  const { t } = useTranslation()

  return (
    <StyledSection>
      <StyledText><Trans>{t('b2b.benefits.text')}</Trans></StyledText>
      <StyledPunkt><Trans>{t('b2b.benefits.list1')}</Trans></StyledPunkt>
      <StyledPunkt center><Trans>{t('b2b.benefits.list2')}</Trans></StyledPunkt>
      <StyledPunkt right><Trans>{t('b2b.benefits.list3')}</Trans></StyledPunkt>
      <StyledImg down src={require('../../assets/main_page/arrow_down.png')} alt="стрелка к следующему пункту" />
      <StyledImg up src={require('../../assets/main_page/arrow_up.png')} alt="стрелка к следующему пункту" />
    </StyledSection>
  )
}