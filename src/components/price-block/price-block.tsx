import { PriceCard } from "../price-card";
import React from "react";
import { StyledPriceBlock } from "./price-block.styled";
const priceData = [
  {

    title: "один раз не спикинг клаб",
    decsription: "Мне только спросить! Ой, попробовать. В общем, я пока только на один раз. Но обещаю вернуться!",
    price: 500,
  },
  {

    title: "за себя и за сашку",
    decsription: "Нас двое и мы хотим говорить. На английском, много и весело. Плачу за себя и того парня (он со мной просто).",
    price: 900,
  },
  {

    title: "мне всего и пять штук",
    decsription: "Пакет встреч со скидкой 12% для истинных фанатов клуба. Поздравляю, вы теперь старожил спикинга.",
    price: 2200,
  },
  {

    title: "девочка, английског нам",
    decsription: "Приватный спикинг клаб только для вашей компании? Без проблем! Выберем дату-время и тему встречи.",
    price: 5000,
  }



];

export const PriceBlock = () => {
  return (
    <StyledPriceBlock>

      {priceData.map((item) => (
        <PriceCard title={item.title} description={item.decsription} price={item.price}></PriceCard>
      ))}

    </StyledPriceBlock>

  );
}