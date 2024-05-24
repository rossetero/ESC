import React from "react";
import {
  StyledGlobalDiv,
  StyledDiv,
  StyledH2,
  StyledP,
  StyledRed,
  StyledLosung
} from "./who-we-are-div.styled";

export const WhoWeAreDiv = () => {
  return (
    <StyledGlobalDiv>
      <StyledDiv>
        <StyledH2>1</StyledH2>
        <StyledP>Мы создаем пространство, где каждый чувствует себя <StyledRed>комфортно</StyledRed> и готов общаться.</StyledP>
      </StyledDiv>
      <StyledDiv>
        <StyledH2>2</StyledH2>
        <StyledP>Мы проводим встречи в разных местах, чтобы каждый мог выбрать
          то, что ему больше <StyledRed>нравится.</StyledRed></StyledP>
      </StyledDiv>
      <StyledDiv>
        <StyledH2>3</StyledH2>
        <StyledP>Наши встречи ориентированы на <StyledRed>практику </StyledRed>
          английского языка, а не занудную теорию.</StyledP>
      </StyledDiv>
      <StyledDiv>
        <StyledH2>4</StyledH2>
        <StyledP>Здесь ты найдешь тех самых <StyledRed>интересных </StyledRed>
          людей с которыми так здорово проводить время вместе.</StyledP>
      </StyledDiv>
      <StyledLosung><StyledRed>HEY,</StyledRed> LET&apos;S GO</StyledLosung>
    </StyledGlobalDiv>
  );
}