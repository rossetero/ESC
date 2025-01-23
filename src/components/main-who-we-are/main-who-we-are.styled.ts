import styled from "@emotion/styled"

export const StyledSection = styled.section`
    position: relative;
    margin-top: 150px;

    @media (max-width: 768px) {
        margin-top: 94px;
        padding-bottom: 30px;
    }
`;

export const StyledH2 = styled.h2`
    font-size: 7vw;
    font-weight: 900;
    letter-spacing: 0.05em;
`;

export const StyledRed = styled.span`
    color: #C00000;
`;

export const StyledP = styled.p`
    font-size: 1.5vw;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-top: 30px;
    margin-bottom: 2vw;

    @media (max-width: 768px) {
        font-size: 3vw;
        line-height: 1.2;
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
`;

export const StyledImg = styled.img`
    width: 30vw;

    @media (max-width: 768px) {
        display: none;
    }
`;