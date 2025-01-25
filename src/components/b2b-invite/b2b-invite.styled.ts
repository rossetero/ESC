import styled from "@emotion/styled"

export const StyledSection = styled.section`
    margin-top: 6vw;
    margin-bottom: 6vw;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }
`;

export const StyledP = styled.p`
    font-size: 1.5vw;
    font-weight: 500;
    letter-spacing: 0.05em;
    width: calc(100% - 42vw);

    @media (max-width: 768px) {
        width: 100%;
        font-size: 3vw;
        line-height: 1.2;
    }
`;

export const StyledDivP = styled.section`
    font-size: 1.5vw;
    font-weight: 500;
    letter-spacing: 0.05em;
    width: 40vw;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 3vw;
        line-height: 1.2;
    }
`;

export const StyledH2 = styled.h2`
    font-size: 7vw;
    font-weight: 900;
    letter-spacing: 0.05em;
    padding-top: 5vw;

    @media (max-width: 768px) {
        padding-top: 30px;
    }
`;

export const StyledRed = styled.span`
    color: #C00000;
`;

