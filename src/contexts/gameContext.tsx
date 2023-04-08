import React, { ReactNode, createContext, useState } from "react"

export enum GameStage {
  Select,
  Selected,
  Finished,
}

interface GameContextValues {
  stage: GameStage
  restore: () => void
  handleSelect: () => void
  handleFinished: () => void
}

const GameContext = createContext<GameContextValues | null>(null)
const { Provider } = GameContext

const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stage, setStage] = useState(GameStage.Select)

  const restore = () => setStage(GameStage.Select)

  const handleSelect = () => setStage(GameStage.Selected)

  const handleFinished = () => setStage(GameStage.Finished)

  return (
    <Provider value={{ stage, restore, handleSelect, handleFinished }}>
      {children}
    </Provider>
  )
}

export { GameContext, GameProvider }
