import styled from "@emotion/styled"
import { css } from '@emotion/react'

export const StyledPanel = styled.nav`

    ${(props: any) => {
        if (!props.header) {
            return css`
    
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 1.25vw; 
    list-style-type: none;
    padding: 0; 
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
    `}
    }} 
`;