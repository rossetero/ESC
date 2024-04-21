import styled from "@emotion/styled";
import { css } from '@emotion/react'

export const StyledPriceCard = styled.div`
    margin: 3% 3%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 21px;
    background-color: var(--secondary-color);
    border-style: solid;
    border-color: var(--secondary-color);
    border-width: 5px;    
    &:hover{
        background-color: white;
                
    }
    
`;

export const StyledTitle = styled.h2`
    font-weight: 900;
    font-size: 48px;
    letter-spacing: 0.05em;
    color:var(--text-red);
    margin-bottom: 35px;
`;

export const StyledDescription = styled.p`
    margin-bottom: 35px;
`;

export const StyledPriceTag = styled.p`

    font-weight: 500;
    font-size: 32px;
    letter-spacing: 0.05em;
    color: #000;

`;