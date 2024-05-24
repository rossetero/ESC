import React from "react";
import { NavPanel } from "../nav-panel";
import { Caption } from "../caption";
import { StyledFooter } from "./footer.styled";

export const Footer = (props) => {
    return (
        <StyledFooter noMargin={props.noMargin}>

            <div>
                <Caption hide footer><h1><span>e</span>sc</h1></Caption>

                <p className="copyright">©ESC 2024 <br /> All rights reserved</p>
            </div>

            <NavPanel></NavPanel>

            <div>
                <p>follow us</p>
                <img width="40" height="40" src={require("../../assets/footer/tg.png")} alt="Контакт в Telegram" />
            </div>

            <div>
                <ul className="contact">
                    <li>Нет вопросов? Запишись.</li>
                    <li>Есть вопросы? Позвони.</li>
                    <li><img width="20" height="20" src={require("../../assets/footer/phone.png")} alt="Номер телефона" /> +7 (930) 71 61
                        910
                    </li>
                </ul>
            </div>

        </StyledFooter>
    )
}