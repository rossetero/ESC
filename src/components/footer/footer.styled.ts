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
    
    .contact {
        display: block;
    }
    
    .copyright {
        padding-left: 10px;
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 0.05em;
        color: rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
        height: auto;
        padding: 30px 46px;
        flex-direction: column;
        gap: 20px;
        font-size: 3vw;

        .copyright {
            font-size: 2.5vw;
            padding-left: 0;
            text-align: center;
        }

        .contact {
            text-align: center;
            li {
                margin-bottom: 10px;
            }
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        nav {
            width: 100%;
        }
    }
`;