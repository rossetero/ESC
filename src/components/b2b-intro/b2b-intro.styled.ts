import styled from "@emotion/styled"

export const StyledIntro = styled.section`
    position: relative;
    margin-top: 60px;

    @media (max-width: 768px) {
        margin-top: 30px;
    }
`;

export const StyledIntroImgLeft = styled.img`
    position: absolute;
    width: 30vw;
    left: -96px;
    z-index: -1;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledIntroImgRight = styled.img`
    position: absolute;
    width: 30vw;
    right: -96px;
    z-index: -1;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledIntroDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledIntroH2 = styled.h2`
    font-size: 7vw;
    font-weight: 900;
    letter-spacing: 0.05em;
`;

export const StyledIntroP = styled.p`
    font-size: 1.5vw;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-top: 30px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 3vw;
        line-height: 1.2;
    }
`;

export const StyledRed = styled.span`
    color: #C00000;
`;