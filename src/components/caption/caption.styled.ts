import styled from "@emotion/styled"
import { css } from '@emotion/react'


export const StyledCaption = styled.div`
    h1{
    font-weight: 900;
    font-size: ${(props) => (props.footer ? '5vw' : '7vw')};
    letter-spacing: 0.05em;
    }
    span{
        color: var(--text-red);
    }



    ${(props: any) => {
        if (props.hide) {
            return css`
    @media (max-width: 600px) {
    {
        display: none;
    }
    }
`
        }
    }}
`;