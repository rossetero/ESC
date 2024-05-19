import React from "react";
import { Link } from "../link";
import { StyledPanel } from './nav-panel.styled'


const navList = [
  { title: "home", href: "/esc" },
  { title: "prices", href: "/esc/pricelist" },
  { title: "4u2k", href: "/esc/4u2k" },
  { title: "b2b", href: "/esc/b2b" },
  { title: "games", href: "/esc/games" },
];

export const NavPanel = (props) => {
  return (
    <nav>
      <StyledPanel header={props.header}>

        {navList.map((element) => (
          <li key={element.href}>
            <Link href={element.href}>{element.title}</Link>
          </li>
        ))}

      </StyledPanel>
    </nav>
  );
};