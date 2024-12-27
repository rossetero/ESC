import React from "react";
import { StyledContentSection } from './content-section.styled'
import { Caption } from "../caption";
//type (video,podcats,)

export const ContentSection = (props) => {

    return (
        <StyledContentSection>
            <Caption><h2><span>{props.type.toUpperCase()} </span>SECTION</h2></Caption>
            <div>
                {Object.values(props.links).map((link) => (
                    <iframe width="364" height="202" src={link} frameborder="0" allowfullscreen></iframe>
                ))}
            </div>

        </StyledContentSection>
    );

};
