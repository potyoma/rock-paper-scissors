import { useState } from 'react'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button>Rules</Button>
    </div>
  )
}

export default App
