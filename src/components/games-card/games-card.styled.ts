import styled from "@emotion/styled"

export const StyledGamesCard = styled.div`
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

    &:hover {
        background-color: white;
    }
`

export const StyledTitle = styled.h2`
    font-weight: 900;
    font-size: 3vw;
    letter-spacing: 0.05em;
    color: var(--text-red);
    margin-bottom: 35px;

    @media (max-width: 768px) {
        font-size: 4vw;
    }
`

export const StyledDescription = styled.p`
    margin-bottom: 35px;
    font-size: 1.5vw;

    @media (max-width: 768px) {
        font-size: 3vw;
        line-height: 1.2;
    }
`