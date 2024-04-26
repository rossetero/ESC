import React from "react";
import '../../src/styles/gamestyle.css'; 
import '../../src/styles/main'; 

// Импорт компонентов
import { Caption } from "../components/caption";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { GamesBlock } from "../components/games-block"; 

const GamesPage = () => {
    return (
        <>
            <Header />

            {/* Основная часть страницы */}
            <main className="main">
                {/* Заголовок */}
                <header className="gamesheader">
                    <div>
                        <Caption>
                            <h1>OUR<span className="red_letter"> GAMES</span></h1>
                        </Caption>
                        {/* <p>Мы собрали лучшие из Выбери, че хочешь поделать:</p> */}
                    </div>
                    <img width="400" height="412" src={require("../../src/assets/games/games1.png")} alt="" />
                </header>
                <GamesBlock /> 
            </main>
            <Footer />
        </>
    );
};

export default GamesPage;

