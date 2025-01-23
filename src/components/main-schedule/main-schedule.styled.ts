import styled from "@emotion/styled"

export const StyledSchedule = styled.section`
    position: relative;
    padding-left: 12vw;
    margin-top: 94px;

    @media (max-width: 768px) {
        padding-left: 0vw;
    }
`;

export const StyledImg = styled.img`
    height: 40vw;
    position: absolute;
    top: 40%;
    left: -96px;
    z-index: -1;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledDiv = styled.div`
    margin-top: 10vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;

    @media (max-width: 768px) {
        align-items: center;
        margin-top: 1vw;
    }
`;

export const StyledP = styled.p`
    width: 50vw;
    font-size: 1.5vw;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-align: end;

    @media (max-width: 768px) {
        font-size: 3vw;
        width: 100%;
        text-align: left;
        line-height: 1.2;
    }
`;