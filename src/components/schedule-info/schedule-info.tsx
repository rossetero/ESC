import React from "react";

export const ScheduleInfo = () => {
    return (
        <div className="schedule_div">
            <h2 className="schedule_header"><span className="red">NEXT</span> MEETING</h2>
            <p className="schedule_info">ул. Спартаковская, д. 2</p>
            <div className="schedule_div_gap">
                <span className="schedule_info">23.03</span>
                <span className="schedule_info">12:10</span>
            </div>
        </div>
    )
}