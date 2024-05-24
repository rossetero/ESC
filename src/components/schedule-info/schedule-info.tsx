import React from "react";
import { 
    StyledDiv, 
    StyledH2, 
    StyledP, 
    StyledInfoDiv, 
    StyledInfo, 
    StyledRed
} from "./schedule-info.styled";

export const ScheduleInfo = () => {
    return (
        <StyledDiv>
            <StyledH2><StyledRed>NEXT</StyledRed> MEETING</StyledH2>
            <StyledP>ул. Спартаковская, д. 2</StyledP>
            <StyledInfoDiv>
                <StyledInfo>23.03</StyledInfo>
                <StyledInfo>12:10</StyledInfo>
            </StyledInfoDiv>
        </StyledDiv>
    )
}