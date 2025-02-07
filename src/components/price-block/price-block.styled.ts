import styled from "@emotion/styled"

export const StyledPriceBlock = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 3%;
    margin-bottom: 3%;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`

export const StyledP = styled.p`
    font-size: 1.5vw;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 3vw;
        line-height: 1.2;
    }
`