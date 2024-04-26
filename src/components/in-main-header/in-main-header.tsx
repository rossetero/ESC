import React from "react";
import { StyledInMainHeader } from './in-main-header.styled'


export const InMainHeader = (props) => {
    console.log(props.children);
    return (
        <StyledInMainHeader reverse={props.reverse}>
            {props.children}
        </StyledInMainHeader>
    );
};