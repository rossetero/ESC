import React from "react";
import { StyledCaption } from "./caption.styled";
export const Caption = (props: any) => {
    return (
        <StyledCaption>{props.children}</StyledCaption>
    );
}
