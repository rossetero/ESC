import React from "react";
import { StyledGamesBlock, StyledGame, StyledOneTimeGame, StyledGameHeader, StyledLogo, StyledFlexItem, StyledDescription } from "./games-block.styled";

interface Game {
  title: string;
  description: string;
  link: string;
  image: string;
}

const gamesData: Game[] = [
  {
    title: "ABC",
    description: "Мой брат Колян сбацал про меня байку на англицком и несколько фишек кинул для шухера. Англицкий ты вроде знаешь, впряжешься за меня, а?",
    link: "https://www.oxfordonlineenglish.com/english-level-test/reading",
    image: require("../../assets/external-link/external-link.png").default // Используем require для динамического импорта изображения
  },
  {
    title: "Алё, меня слышно?",
    description: "Мой кент на мобилу текст записал с иностранкой. Понимаешь, о чём тут говорят?",
    link: "https://test-english.com/listening/",
    image: require("../../assets/external-link/external-link.png").default // Используем require для динамического импорта изображения
  },
  {
    title: "Анонимное тестирование",
    description: "Ты язык-то нормально знаешь? Проверься, никто угарать не будет",
    link: "https://www.ego4u.com/en/cram-up/tests",
    image: require("../../assets/external-link/external-link.png").default // Используем require для динамического импорта изображения
  }
];

export const GamesBlock = () => {
  return (
    <StyledGamesBlock>
      {gamesData.map((game, index) => (
        <StyledGame key={index}>
          <StyledOneTimeGame>
            <StyledGameHeader>
              <StyledLogo>
                <a href={game.link} className="red_letter">{game.title}</a>
                {/* <StyledImage src={game.image} /> Используем стилизованное изображение */}
              </StyledLogo>
            </StyledGameHeader>
            <StyledFlexItem>
              <StyledDescription>{game.description}</StyledDescription>
            </StyledFlexItem>
          </StyledOneTimeGame>
        </StyledGame>
      ))}
    </StyledGamesBlock>
  );
};
