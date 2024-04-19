import styled from "@emotion/styled"
import { css } from '@emotion/react'


export const StyledFooter = styled.footer`
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    background-color: #D9D9D9;
    padding: 0% 10%;
    height: 204px;
    justify-content: space-between; */
    padding: 0% 10%;
    height: 204px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1vw;
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