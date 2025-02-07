import React, { useState, useEffect } from "react"
import { URLs } from "../../__data__/urls"
import { StyledGamesBlock } from "./games-block.styled"
import { GamesCard } from "../games-card" 


export const GamesBlock = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch(`${URLs.api.main}/game-links`)
      .then(response=>response.json())
      .then(data=>{
        console.log("API response:", data)
        setData(data.data)
      })
  },[])    
  return (
    <StyledGamesBlock>
      {data.map((game) => (
        <GamesCard title={game.title} description={game.description} link={game.link}/>
      ))}
    </StyledGamesBlock>
  )
}
