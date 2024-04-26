import React from "react";
import { StyledCaption } from "./caption.styled";
export const Caption = (props: any) => {
    return (
        <StyledCaption hide={props.hide} footer={props.footer}>{props.children}</StyledCaption>
    );
}
