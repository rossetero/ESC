import styled from "@emotion/styled"
import { css } from '@emotion/react'


export const StyledCaption = styled.div`
    h1{
        font-weight: 900;
        font-size: ${(props: any) => (props.footer ? '5vw' : '7vw')};
        letter-spacing: 0.05em;
    }

    span{
        color: var(--text-red);
    }

    h2 {
        font-weight: 900;
        font-size: 2vw;
        letter-spacing: 0.05em;
        text-align: justify;
    }

    @media (max-width: 768px) {
        h1 {
            padding-top: 30px;
            padding-bottom: 30px;
        }

        h2 {
            font-size: 4vw;
        }
    }

    ${(props: any) => {
      if (props.hide) {
        return css`
                @media (max-width: 768px) {
                    display: none;
                }
            `
      }
    }}
`