import styled from "styled-components"
import { Fading } from "../styles/animations"
import { useContext } from "react"
import { GameContext, GameStage } from "../contexts/gameContext"
import Gesture from "./gesture"

const SelectedContainer = styled(Fading)``

const SelectedGesture = () => {
  const { stage, gesture } = useContext(GameContext) ?? {}

  const show = stage === GameStage.Selected

  return show ? (
    <SelectedContainer show={show}>
      <Gesture gesture={gesture!} size="md" disabled />
    </SelectedContainer>
  ) : null
}

export default SelectedGesture
