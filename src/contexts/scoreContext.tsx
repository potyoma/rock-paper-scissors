import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react"
import { readStoreValue, setStoreValue } from "../storage"
import usePageUnload from "../hooks/usePageUnload"

interface ScoreContextType {
  increment: () => void
  score: number
}

const ScoreContext = createContext<ScoreContextType>({
  increment: () => {},
  score: 0,
})

const SCORE_KEY = "SCORE"

const ScoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useState(0)

  const increment = () => setScore(sc => sc + 1)

  const { Provider } = ScoreContext

  usePageUnload(() => score > 0 && setStoreValue(SCORE_KEY, score))

  useEffect(() => {
    const savedScore = readStoreValue<number>(SCORE_KEY)
    savedScore && setScore(savedScore)
  }, [])

  return <Provider value={{ increment, score }}>{children}</Provider>
}

export { ScoreContext, ScoreProvider }
