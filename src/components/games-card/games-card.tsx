import React from 'react'
import { 
  StyledGamesCard,
  StyledTitle,
  StyledDescription
} from "./games-card.styled"

interface GamesCardProps {
  title: string;
  description: string;
  link: string;
}

export const GamesCard: React.FC<GamesCardProps> = ({ title, description, link }) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer")
  }
    
  return (
    <>
      <StyledGamesCard onClick={handleClick} style={{ cursor: "pointer" }}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledGamesCard>
    </>
  )
}
  