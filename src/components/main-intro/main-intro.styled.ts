import styled from "@emotion/styled"

export const StyledIntro = styled.section`
    position: relative;
    margin-top: 94px;
`

export const StyledIntroH1 = styled.h1`
    font-size: 10vw;
    font-weight: 900;
    letter-spacing: 0.05em;
    max-width: 756px;

    @media (max-width: 768px) {
        font-size: 12vw;
        max-width: 100%;
    }
`

export const StyledRed = styled.span`
    color: #C00000;
`

export const StyledIntroP = styled.p`
    font-size: 1.5vw;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-top: 42px;
    max-width: 580px;

    @media (max-width: 768px) {
        font-size: 3vw;
        max-width: 100%;
        margin-top: 30px;
        line-height: 1.2;
    }
`

export const StyledIntroDiv = styled.div`
    position: absolute;
    right: -130px;
    top: 0px;
    height: 100%;
    z-index: -1;
    width: 50vw;
    max-width: 720px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`

export const StyledIntroImg = styled.img`
    display: block;
    width: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`