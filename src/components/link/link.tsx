import React from "react";

import { StyledLink } from './link.styled'

export const Link = (props) => {
    return (
        <StyledLink contrast={props.contrast} href={props.href}>
            {props.children}
        </StyledLink>
    );
};