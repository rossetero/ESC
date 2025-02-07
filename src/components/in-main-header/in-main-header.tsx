import React from "react"
import { StyledInMainHeader } from './in-main-header.styled'


export const InMainHeader = (props) => {
  return (
    <StyledInMainHeader reverse={props.reverse}>
      {props.children}
    </StyledInMainHeader>
  )
}