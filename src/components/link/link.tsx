import React from "react"

import { StyledLink } from './link.styled'
import { Link as ConnectedLink } from 'react-router-dom'

export const Link = (props) => {
  return (
    <StyledLink >
      <ConnectedLink to={props.href}>

        {props.children}

      </ConnectedLink>
    </StyledLink>
  )
}