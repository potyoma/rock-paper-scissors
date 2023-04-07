import { useState } from 'react'
import Button from './components/button'
import { GlobalStyles } from './styles/globalStyles'

function App() {
  const [showRules, setShowRules] = useState(false)

  return (
    <div>
      <GlobalStyles/>
      <Button onClick={() => setShowRules(!showRules)}>Rules</Button>
    </div>
  )
}

export default App
