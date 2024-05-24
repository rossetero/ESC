import React from "react";
import { 
    StyledSchedule, 
    StyledImg,
    StyledDiv,
    StyledP
} from "./main-schedule.styled";
import { ScheduleInfo } from "../schedule-info";
import { InviteButton } from "../invite-button";

export const MainSchedule = () => {
    return (
        <StyledSchedule>
            <ScheduleInfo />
            <StyledImg src={require('../../assets/main_page/podnos.jpg')} alt="рука официанта с подносом" />
            <StyledDiv>
                <StyledP>Для участия достаточно записаться через удобный мессенджер! Оставь контакты в
                    форме внизу и хост свяжется с тобой.</StyledP>
                <InviteButton>Записаться</InviteButton>
            </StyledDiv>
        </StyledSchedule>
    )
}