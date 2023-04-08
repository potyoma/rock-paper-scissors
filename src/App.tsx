import { useState } from "react"
import { GlobalStyles } from "./styles/globalStyles"
import Header from "./components/header"
import { ScoreProvider } from "./contexts/scoreContext"
import RulesButton from "./components/rulesButton"
import RulesModal from "./components/rulesModal"
import { GameProvider } from "./contexts/gameContext"
import styled from "styled-components"
import GestureSelect from "./components/gestureSelect"
import SelectedGesture from "./components/selectedGesture"
import PlayAgain from "./components/playAgain"
import GameContainer from "./components/gameContainer"

function App() {
  const [showRules, setShowRules] = useState(false)

  return (
    <div>
      <GlobalStyles />
      <ScoreProvider>
        <Header />
        <GameProvider>
          <GameContainer>
            <GestureSelect />
            <SelectedGesture />
            <PlayAgain />
          </GameContainer>
        </GameProvider>
      </ScoreProvider>
      <RulesButton onClick={() => setShowRules(!showRules)} />
      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  )
}

export default App
