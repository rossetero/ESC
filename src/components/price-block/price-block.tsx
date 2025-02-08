import React from "react"
import { useTranslation } from "react-i18next"
import { PriceCard } from "../price-card"
import { StyledPriceBlock } from "./price-block.styled"

export const PriceBlock = () => {
  const { t } = useTranslation()
  const priceData = t('price.data', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    price: number;
  }>

  return (
    <StyledPriceBlock>
      {priceData.map((item) => (
        <PriceCard title={item.title} description={item.description} price={item.price} />
      ))}
    </StyledPriceBlock>
  )
}