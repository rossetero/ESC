import React from "react"
import { useTranslation, Trans } from "react-i18next"
import { Caption } from "../components/caption"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { PriceBlock } from "../components/price-block"
import { InMainHeader } from "../components/in-main-header"
import { Main1 } from "../components/common"
import { StyledP } from "../components/price-block/price-block.styled"

const pricelist = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header />

      <Main1>

        <InMainHeader>
          <img width="450vw" src={require("../assets/prices/handmoney.png")} alt="" />
          <div>
            <Caption><h1>OUR<span> PRICES</span></h1></Caption>
            <StyledP><Trans>{t('price.intro')}</Trans></StyledP>
          </div>
        </InMainHeader>

        <PriceBlock />

        <section >
          <StyledP><Trans>{t('price.outro')}</Trans></StyledP>
        </section>

      </Main1>

      <Footer />
    </>
  )
}

export default pricelist