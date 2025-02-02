import styled from "@emotion/styled";

export const StyledImg = styled.img`
    height: 30vw;

    @media (max-width: 768px) {
            display: none;
    }
`;

export const StyledP = styled.p`
    font-size: 1.5vw;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 3vw;
        line-height: 1.2;
    }
`;

export const StyledDiv = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-around; 
    gap: 20px; 
    padding: 0px 96px 0px 96px;

    @media (max-width: 768px) {
        padding: 0px 46px 0px 46px;
    }
`;

export const StyledDivDiv = styled.div`
    
`;