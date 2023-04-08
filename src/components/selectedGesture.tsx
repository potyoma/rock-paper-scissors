import styled from "styled-components"
import { useContext } from "react"
import { GameContext, GameStage } from "../contexts/gameContext"
import Gesture from "./gesture"
import withFadeShow from "../hoks/withFadeShow"
import { Fading } from "../styles/animations"

const SelectedContainer = styled.div``

const ComputerGesture = styled.div<{ show: boolean }>`
  /* width:  */

  ${Fading}
`

const SelectedGesture = () => {
  const { gesture, computerGesture } = useContext(GameContext) ?? {}

  return (
    <>
      <Gesture gesture={gesture!} size="md" disabled />
      <ComputerGesture show={!!computerGesture}>
        <Gesture gesture={computerGesture!} disabled />
      </ComputerGesture>
    </>
  )
}

export default withFadeShow(
  SelectedGesture,
  [GameStage.Selected, GameStage.Finished],
  SelectedContainer
)
