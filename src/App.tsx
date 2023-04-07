import { useState } from "react"
import Button from "./components/button"
import { GlobalStyles } from "./styles/globalStyles"
import Header from "./components/header"

function App() {
  const [showRules, setShowRules] = useState(false)
  const [score, setScore] = useState(0)

  return (
    <div>
      <GlobalStyles />
      <Header score={score} />
      <Button onClick={() => setShowRules(!showRules)}>Rules</Button>
    </div>
  )
}

export default App
