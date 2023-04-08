import styled from "styled-components"
import { useContext } from "react"
import { GameContext, GameStage } from "../contexts/gameContext"
import Gesture from "./gesture"
import withFadeShow from "../hoks/withFadeShow"

const SelectedContainer = styled.div``

const SelectedGesture = () => {
  const { gesture } = useContext(GameContext) ?? {}

  return (
    <>
      <Gesture gesture={gesture!} size="md" disabled />
    </>
  )
}

export default withFadeShow(
  SelectedGesture,
  GameStage.Selected,
  SelectedContainer
)
