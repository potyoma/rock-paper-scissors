import { useState } from "react"
import { GlobalStyles } from "./styles/globalStyles"
import Header from "./components/header"
import { ScoreProvider } from "./contexts/scoreContext"
import RulesButton from "./components/rules/rulesButton"
import RulesModal from "./components/rules/rulesModal"
import { GameProvider } from "./contexts/gameContext"
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
        <GameProvider>
          <GameContainer>
            <Header />
            <GestureSelect />
            <SelectedGesture />
            <PlayAgain />
            <RulesButton onClick={() => setShowRules(!showRules)} />
          </GameContainer>
        </GameProvider>
      </ScoreProvider>
      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  )
}

export default App
