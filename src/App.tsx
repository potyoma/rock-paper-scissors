import { useState } from "react"
import { GlobalStyles } from "./styles/globalStyles"
import Header from "./components/header"
import { ScoreProvider } from "./contexts/scoreContext"
import RulesButton from "./components/rulesButton"
import RulesModal from "./components/rulesModal"

function App() {
  const [showRules, setShowRules] = useState(false)

  return (
    <div>
      <GlobalStyles />
      <ScoreProvider>
        <Header />
      </ScoreProvider>
      <RulesButton onClick={() => setShowRules(!showRules)} />
      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  )
}

export default App
