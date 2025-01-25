import React, { useState, useEffect } from "react";
import { URLs } from "../../__data__/urls";
import {StyledLink, StyledGamesBlock, StyledGame, StyledOneTimeGame, StyledGameHeader, StyledLogo, StyledFlexItem, StyledDescription } from "./games-block.styled";

interface Game {
  title: string;
  description: string;
  link: string;
  image: string;
}

export const GamesBlock = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
      fetch(`${URLs.api.main}/game-links`)
      .then(response=>response.json())
      .then(data=>{setData(data.data)})
  },[])    
  return (
    <StyledGamesBlock>
      {data.map((game, index) => (
        <StyledGame key={index}>
          <StyledOneTimeGame>
            <StyledGameHeader>
              <StyledLogo>
                <StyledLink href={game.link}>
                  {game.title}
                  </StyledLink> 
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
