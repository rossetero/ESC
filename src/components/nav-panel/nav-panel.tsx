import React from "react";
import { Link } from "../link";
import { StyledPanel } from './nav-panel.styled'


const navList = [
    { title: "home", href: "#01" },
    { title: "prices", href: "#02" },
    { title: "4u2k", href: "#03" },
    { title: "b2b", href: "#04" },
    { title: "games", href: "#05" },
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