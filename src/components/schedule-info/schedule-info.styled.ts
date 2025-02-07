import styled from "@emotion/styled"

export const StyledDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 130px;

    @media (max-width: 768px) {
        padding-bottom: 30px;
    }
`

export const StyledH2 = styled.h2`
    font-size: 7vw;
    font-weight: 900;
    letter-spacing: 0.05em;
`

export const StyledP = styled.p`
    font-size: 3vw;
    font-weight: 500;
    letter-spacing: 0.05em;
`

export const StyledInfoDiv = styled.div`
    display: flex;
    gap: 30px;
`

export const StyledInfo = styled.span`
    font-size: 3vw;
    font-weight: 500;
    letter-spacing: 0.05em;
`

export const StyledRed = styled.span`
    color: #C00000;
`