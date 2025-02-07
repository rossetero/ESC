import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const StyledInMainHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props: any) => {
      if (props.reverse) {
        return css`
                flex-wrap: wrap-reverse;
            `
      } else {
        return css`
                flex-wrap: wrap;
            `
      }
    }}

    img {
        @media (max-width: 768px) {
            display: none;
        }
    }

    div {
        @media (max-width: 768px) {
            width: 100%;
            text-align: center;
        }
    }
`
