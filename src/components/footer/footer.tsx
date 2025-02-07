import React from "react";
import { useTranslation } from "react-i18next";
import { NavPanel } from "../nav-panel";
import { Caption } from "../caption";
import { LocalButton } from "../local-button";
import { StyledFooter } from "./footer.styled";
import { getAllFeatures, getNavigationValue, getFeatureValue } from "@brojs/cli";

export const Footer = (props) => {
    const { t } = useTranslation();

    return (
        <StyledFooter noMargin={props.noMargin}>

            <div>
                {getNavigationValue('esc.lang_switch_btn') && <LocalButton />}
                <p className="copyright">©ESC 2024 <br /> All rights reserved</p>
            </div>

            <NavPanel></NavPanel>
            {getNavigationValue('esc.contact') &&<>
            <div>
                <p>follow us</p>
                <img width="40" height="40" src={require("../../assets/footer/tg.png")} alt="Контакт в Telegram" />
            </div>

            <div>
                <ul className="contact">
                   {getNavigationValue('esc.invite') && <li>{t('footer.noquestions')}</li>}
                     <li>{t('footer.gotquestions')}</li>
                    <li><img width="20" height="20" src={require("../../assets/footer/phone.png")} alt="Номер телефона" /> +7 (930) 71 61
                        910
                    </li>
                </ul>
            </div>
            </>}
        </StyledFooter>
    )
}