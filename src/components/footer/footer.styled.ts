import styled from "@emotion/styled"

interface StyledFooterProps {
    noMargin?: boolean;
}

export const StyledFooter = styled.footer<StyledFooterProps>`
    padding: 0% 10%;
    height: 204px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1vw;
    margin-top: ${props => (props.noMargin ? '0%' : '5%')};
    .contact{
        display:block;
    }
    .copyright {
    padding-left: 10px;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.5);
}
`;