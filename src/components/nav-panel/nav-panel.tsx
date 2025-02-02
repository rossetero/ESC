import React from "react";
import { Link } from "../link";
import { StyledPanel } from './nav-panel.styled'
import { URLs } from "../../__data__/urls";

const navList = [
  { title: "home", href: URLs.baseUrl },
  { title: "prices", href: URLs.ui.prices.url },
  { title: "4u2k", href: URLs.ui.u2k.url },
  { title: "b2b", href: URLs.ui.b2b.url },
  { title: "games", href: URLs.ui.games.url },
];

export const NavPanel = (props) => {
  return (
    <nav>
      <StyledPanel header={props.header}>

        {/* {navList.map((element) => (
          <li key={element.href}>
            <Link href={element.href}>{element.title}</Link>
          </li>
        ))} */}

        {navList.map((element) => {
          return element.href ? (
            <li key={element.href}>
              <Link href={element.href}>{element.title}</Link>
            </li>
          ) : null;
        })}

      </StyledPanel>
    </nav>
  );
};