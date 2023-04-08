import { ComponentType, useContext } from "react"
import useFade from "../hooks/useFade"
import { GameContext, GameStage } from "../contexts/gameContext"

export interface Show {
  show: true
}

type GenericShow<T> = T & Show

const withFadeShow =
  <TProps,>(Component: ComponentType<GenericShow<TProps>>, stage: GameStage) =>
  (props: object) => {
    const { stage: currentStage } = useContext(GameContext) ?? {}

    const show = useFade<GameStage>(currentStage, st => st === stage)

    return show ? <Component {...props} show={show} /> : null
  }

export default withFadeShow
