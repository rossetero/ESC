import { GlobalStyle } from "./global.styled";
import React from "react";
export const StGlobal = (props) => {
  return (
    <GlobalStyle>{props.children}</GlobalStyle>
  )
};