import styled from "@emotion/styled"
import { css } from '@emotion/react'

export const StyledPanel = styled.nav`
    ${(props: any) => {
        if (!props.header) {
            return css`
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1.25vw; 
                list-style-type: none;
                padding: 0;

                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                }
            `
        }
        else {
            return css`
                display: flex;
                flex-wrap: nowrap;
                flex-direction: row;
                justify-content: space-around;
                list-style-type: none;
                width: 50vw;
            `
        }
    }} 
`;