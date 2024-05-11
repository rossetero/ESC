import React from "react";
import { Link } from "../link";
import { StyledPanel } from './nav-panel.styled'


const navList = [
  { title: "home", href: "/esc" },
  { title: "prices", href: "/esc/b2b" },
  { title: "4u2k", href: "/esc/4u2k" },
  { title: "b2b", href: "/esc/games" },
  { title: "games", href: "/esc/pricelist" },
];

export const NavPanel = (props) => {
  const isHeader = props.header === true;
  return (
    <nav>
      <StyledPanel header={props.header}>

        {navList.map((element, index) => (
          <li key={element.href}>
            <Link href={element.href}>{element.title}</Link>
          </li>
        ))}

      </StyledPanel>
    </nav>
  );
};