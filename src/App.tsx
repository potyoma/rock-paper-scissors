import { useContext, useState } from "react"
import Button from "./components/button"
import { GlobalStyles } from "./styles/globalStyles"
import Header from "./components/header"
import { ScoreContext, ScoreProvider } from "./contexts/scoreContext"

function App() {
  const [showRules, setShowRules] = useState(false)

  const IncrButton = () => {
    const { increment } = useContext(ScoreContext)

    return <Button onClick={increment}>increment</Button>
  }

  return (
    <div>
      <GlobalStyles />
      <ScoreProvider>
        <Header />
        <IncrButton />
      </ScoreProvider>
      <Button onClick={() => setShowRules(!showRules)}>Rules</Button>
    </div>
  )
}

export default App
