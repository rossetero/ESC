import React from "react";

import { StyledLink } from './link.styled'
import { Link as ConnectedLink } from 'react-router-dom'

export const Link = (props) => {
  return (
    <ConnectedLink to={props.href}>
      <StyledLink >
        {props.children}
      </StyledLink>
    </ConnectedLink>
  );
};