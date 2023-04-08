import React, { ReactNode, createContext, useContext, useState } from "react"
import { ScoreContext } from "./scoreContext"

export enum GameStage {
  Select,
  Selected,
  Finished,
}

export enum GameResult {
  None,
  Win,
  Loose,
}

interface GameContextValues {
  stage: GameStage
  restore: () => void
  handleSelect: () => void
  win: () => void
  loose: () => void
  onSelect: (gesture: string) => void
  gesture: string
}

const GameContext = createContext<GameContextValues | null>(null)
const { Provider } = GameContext

const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stage, setStage] = useState(GameStage.Select)
  const [gameResult, setGameResult] = useState(GameResult.None)
  const [gesture, setGesture] = useState("")

  const { increment } = useContext(ScoreContext)

  const restore = () => {
    setGameResult(GameResult.None)
    setStage(GameStage.Select)
  }

  const handleSelect = () => setStage(GameStage.Selected)

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

  const onSelect = (gesture: string) => setGesture(gesture)

  return (
    <Provider
      value={{ stage, restore, handleSelect, win, loose, gesture, onSelect }}
    >
      {children}
    </Provider>
  )
}

export { GameContext, GameProvider }
