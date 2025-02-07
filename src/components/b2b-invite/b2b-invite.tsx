import React from "react";
import { useTranslation, Trans } from "react-i18next";
import {
    StyledSection, 
    StyledDiv, 
    StyledP, 
    StyledDivP, 
    StyledH2, 
    StyledRed
} from "./b2b-invite.styled";
import { InviteButton } from "../invite-button";
import { getNavigationValue } from "@brojs/cli";

export const B2BInvite = () => {
    const { t } = useTranslation();

    return (
        <StyledSection>
            <StyledDiv>
                <StyledP><Trans>{t('b2b.invite.text1')}</Trans></StyledP>
               { getNavigationValue('esc.invite') && <div>
                    <InviteButton><Trans>{t('b2b.invite.button')}</Trans></InviteButton>
                    <StyledDivP><Trans>{t('b2b.invite.text2')}</Trans></StyledDivP>
                </div>}
            </StyledDiv>
            <StyledH2>COME <StyledRed>WITH</StyledRed> US</StyledH2>
        </StyledSection>
    );
}