import React from "react";
import {
    StyledSection, 
    StyledDiv, 
    StyledP, 
    StyledDivP, 
    StyledH2, 
    StyledRed
} from "./b2b-invite.styled";
import { InviteButton } from "../invite-button";

export const B2BInvite = () => {
    return (
        <StyledSection>
            <StyledDiv>
                <StyledP>Мы с радостью обсудим все детали сотрудничества и предложим вам индивидуальные
                условия, которые будут выгодны всем сторонам.<br /><br />Не упустите шанс привлечь новую аудиторию и
                поддержать наш образовательный проект!
                </StyledP>
                <div>
                    <InviteButton>Пригласить</InviteButton>
                    <StyledDivP>Заинтересовало предложение? Оставляйте заявку и мы с вами свяжемся!</StyledDivP>
                </div>
            </StyledDiv>
            <StyledH2>COME <StyledRed>WITH</StyledRed> US</StyledH2>
        </StyledSection>
    );
}