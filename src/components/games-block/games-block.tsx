import React, { useState, useEffect } from "react";
import { URLs } from "../../__data__/urls";
import { StyledGamesBlock } from "./games-block.styled";
import { GamesCard } from "../games-card"; 

interface Game {
  title: string;
  description: string;
  link: string;
}

export const GamesBlock = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
      fetch(`${URLs.api.main}/game-links`)
      .then(response=>response.json())
      .then(data=>{
        console.log("API response:", data);
        setData(data.data)
      })
  },[])    
  // return (
  //   <StyledGamesBlock>
  //     {data.map((game, index) => (
  //       <StyledGame key={index}>
  //         <StyledOneTimeGame>
  //           <StyledGameHeader>
  //             <StyledLogo>
  //               <StyledLink href={game.link}>
  //                 {game.title}
  //                 </StyledLink> 
  //             </StyledLogo>
  //           </StyledGameHeader>
  //           <StyledFlexItem>
  //             <StyledDescription>{game.description}</StyledDescription>
  //           </StyledFlexItem>
  //         </StyledOneTimeGame>
  //       </StyledGame>
  //     ))}
  //   </StyledGamesBlock>
  // );

  return (
    <StyledGamesBlock>
      {data.map((game, index) => (
        <GamesCard title={game.title} description={game.description} link={game.link}/>
      ))}
    </StyledGamesBlock>
  );
};
