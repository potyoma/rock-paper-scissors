import styled from "styled-components"
import { useContext } from "react"
import { GameContext, GameStage } from "../contexts/gameContext"
import Gesture from "./gesture"
import withFadeShow from "../hoks/withFadeShow"
import { FadingComponent } from "../styles/animations"

const SelectedContainer = styled.div``

const ComputerGesture = styled.div`
  
`

const SelectedGesture = () => {
  const { gesture, computerGesture } = useContext(GameContext) ?? {}

  return (
    <>
      <Gesture gesture={gesture!} size="md" disabled />
      <ComputerGesture>
        <FadingComponent show={!!computerGesture}>
          <Gesture gesture={computerGesture!} disabled />
        </FadingComponent>
      </ComputerGesture>
    </>
  )
}

export default withFadeShow(
  SelectedGesture,
  [GameStage.Selected, GameStage.Finished],
  SelectedContainer
)
