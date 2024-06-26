import React from "react";
import { GlobalStyle, MainWrapper, GamesHeader } from "../components/gamestyle"; /*перенесенные стили .css*/
import { Caption } from "../components/caption";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { GamesBlock } from "../components/games-block";

const GamesPage = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <MainWrapper>
                <GamesHeader>
                    <div>
                        <Caption>
                            <h1>OUR<span className="red_letter"> GAMES</span></h1>
                        </Caption>
                    </div>
                    <img width="400" height="412" src={require("../../src/assets/games/games1.png")} alt="" />
                </GamesHeader>
                <GamesBlock /> 
            </MainWrapper>
            <Footer />
        </>
    );
};

export default GamesPage;
