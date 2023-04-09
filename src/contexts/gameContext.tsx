import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { ScoreContext } from "./scoreContext"
import { GameResult, getComputerGesture, hasWon } from "../core"

export enum GameStage {
  Select,
  Selected,
  Finished,
}

interface GameContextValues {
  stage: GameStage
  restore: () => void
  onSelect: (gesture: string) => void
  gesture: string
  computerGesture: string
  gameResult: GameResult
}

const GameContext = createContext<GameContextValues | null>(null)
const { Provider } = GameContext

const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stage, setStage] = useState(GameStage.Select)
  const [gameResult, setGameResult] = useState(GameResult.None)
  const [computerGesture, setComputerGesture] = useState("")
  const [gesture, setGesture] = useState("")

  const { increment } = useContext(ScoreContext)

  const restore = () => setGameResult(GameResult.None)

  const handleFinished = () => setStage(GameStage.Finished)

  const onSelect = (gesture: string) => {
    setGesture(gesture)
    setStage(GameStage.Selected)
  }

  useEffect(() => {
    gesture &&
      setTimeout(() => {
        const compGesture = getComputerGesture()
        setComputerGesture(compGesture)
      }, 1000)
  }, [gesture])

  useEffect(() => {
    if (!computerGesture || !gesture) return

    const status = hasWon(gesture, computerGesture)
    setGameResult(status)
  }, [gesture, computerGesture])

  useEffect(() => {
    switch (gameResult) {
      case GameResult.None:
        setStage(GameStage.Select)
        break
      case GameResult.Win:
        increment()
      default:
        handleFinished()
    }
  }, [gameResult])

  return (
    <Provider
      value={{ stage, restore, gesture, onSelect, computerGesture, gameResult }}
    >
      {children}
    </Provider>
  )
}

export { GameContext, GameProvider }
