import React from "react"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { GamesBlock } from "../components/games-block"
import { Main1 } from "../components/common"
import { GamesHeader } from "../components/games-header"

const GamesPage = () => {
  return (
    <>
      <Header />

      <GamesHeader />

      <Main1>
        <GamesBlock />
      </Main1>

            

      {/* <MainWrapper>
                <GamesHeader>
                    <div>
                        <Caption>
                            <h1>OUR<span className="red_letter"> GAMES</span></h1>
                        </Caption>
                    </div>
                    <img width="400" height="412" src={require("../../src/assets/games/games1.png")} alt="" />
                </GamesHeader>
                <GamesBlock /> 
            </MainWrapper> */}
      <Footer />
    </>
  )
}

export default GamesPage
