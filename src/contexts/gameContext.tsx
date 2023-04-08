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

  const win = () => {
    setGameResult(GameResult.Win)
    increment()
    handleFinished()
  }

  const loose = () => {
    setGameResult(GameResult.Loose)
    handleFinished()
  }

  const draw = () => {
    setGameResult(GameResult.Draw)
    handleFinished()
  }

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
    if (gameResult === GameResult.None) {
      setStage(GameStage.Select)
      return
    }

    if (gameResult === GameResult.Win) increment()

    handleFinished()
  }, [gameResult])

  return (
    <Provider value={{ stage, restore, gesture, onSelect, computerGesture }}>
      {children}
    </Provider>
  )
}

export { GameContext, GameProvider }
