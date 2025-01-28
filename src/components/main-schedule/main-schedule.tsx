import React from "react";
import { useTranslation } from "react-i18next";
import { 
    StyledSchedule, 
    StyledImg,
    StyledDiv,
    StyledP
} from "./main-schedule.styled";
import { ScheduleInfo } from "../schedule-info";
import { InviteButton } from "../invite-button";

export const MainSchedule = () => {
    const { t } = useTranslation();

    return (
        <StyledSchedule>
            <ScheduleInfo />
            <StyledImg src={require('../../assets/main_page/podnos.jpg')} alt="рука официанта с подносом" />
            <StyledDiv>
                <StyledP>{t('main.schedule.text')}</StyledP>
                <InviteButton>{t('main.schedule.button')}</InviteButton>
            </StyledDiv>
        </StyledSchedule>
    )
}