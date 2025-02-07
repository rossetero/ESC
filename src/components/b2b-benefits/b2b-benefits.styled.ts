import styled from "@emotion/styled"

interface StyledPunktProps {
  center?: boolean;
  right?: boolean;
}

interface StyledImgProps {
  up?: boolean;
  down?: boolean;
}

export const StyledSection = styled.section`
    position: relative;
    margin-top: 8vw;
`

export const StyledText = styled.p`
    font-size: 1.5vw;
    font-weight: 500;
    letter-spacing: 0.05em;

    @media (max-width: 768px) {
        font-size: 3vw;
        line-height: 1.2;
        padding-bottom: 30px;
    }
`

export const StyledPunkt = styled.p<StyledPunktProps>`
    font-size: 1.5vw;
    font-weight: 500;
    letter-spacing: 0.05em;
    width: 35vw;
    padding-top: 3%;
    padding-left: ${props => (props.right ? '60%' : props.center ? '30%' : '0%')};

    @media (max-width: 768px) {
        font-size: 3vw;
        line-height: 1.2;
    }
`

export const StyledRed = styled.span`
    color: #C00000;
`

export const StyledImg = styled.img<StyledImgProps>`
    position: absolute;
    z-index: -1;
    width: 8vw;
    top: ${props => (props.down ? '52%' : props.up ? '85%' : '0')};
    left: ${props => (props.down ? '42%' : props.up ? '48%' : '0')};

    @media (max-width: 768px) {
        top: ${props => (props.down ? '60%' : props.up ? '85%' : '0')};
    }
`
