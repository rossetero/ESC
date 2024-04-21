import React from "react";
import { StyledInMainHeader } from './in-main-header.styled'


export const InMainHeader = (props) => {
    console.log(props.children);
    return (
        <StyledInMainHeader>
            {props.children}
        </StyledInMainHeader>
    );
};