import React from 'react';
import { StyledPriceCard, StyledTitle, StyledDescription, StyledPriceTag } from './price-card.styled'


export const PriceCard = ({ title, description, price }) => {
    return (

        <StyledPriceCard>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
            <StyledPriceTag>{price + "₽"}</StyledPriceTag>
        </StyledPriceCard >
    );
}