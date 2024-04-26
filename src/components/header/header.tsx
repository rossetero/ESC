import React from "react"
import { NavPanel } from "../nav-panel"
import { Caption } from "../caption"
import { StyledHeader } from "./header.styled";

export const Header = () => {
    return (
        <header>
            <StyledHeader>
                <Caption hide><h1><span>e</span>sc</h1></Caption>
                <NavPanel header />
            </StyledHeader>

        </header>
    )
};