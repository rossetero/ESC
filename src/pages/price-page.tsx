import React from "react"

import { Caption } from "../components/caption";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { PriceBlock } from "../components/price-block";
import { InMainHeader } from "../components/in-main-header";
import { Main1 } from "../components/common";
const pricelist = () => {
  return (
    <>
      <Header />

      <Main1>

        <InMainHeader>
          <img width="606" height="472" src={require("../assets/prices/handmoney.png")} alt="" />
          <div>
            <Caption><h1>OUR<span> PRICES</span></h1></Caption>
            <p>Разовая встреча на “попробовать”? <br /> Две проходки - себе и другу? <br /> По две каждому? <br /> А
              может, абонемент
              на пять встреч? <br /> Так много опций... <br />
              <br /> Выбирай тот уровень участия, который по душе
              именно тебе, <br /> и
              присоединяйся к нашей дружной компании!
            </p>
          </div>
        </InMainHeader>

        <PriceBlock />

        <section >
          <p>
            Всё предельно просто! Выбери тариф, который придётся по душе и оставь контакты в форме. Для
            подтверждения записи хост напишет тебе лично! Заодно сможешь задать все интересующие вопросы.
            <br />
            <br />
            Словом, действуй. See ya!
          </p>

        </section>

      </Main1>

      <Footer />
    </>
  );
};

export default pricelist