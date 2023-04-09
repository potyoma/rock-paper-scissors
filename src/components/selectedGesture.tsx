import styled, { css } from "styled-components"
import { useContext } from "react"
import { GameContext, GameStage } from "../contexts/gameContext"
import Gesture, { GestureMd } from "./gesture"
import withFadeShow from "../hoks/withFadeShow"
import { FadingComponent } from "../styles/animations"
import { GameResult } from "../core"

const Glow = css<{ glow: boolean }>`
  ${({ glow }) =>
    glow &&
    css`
      --glow: 0px 0px 80px 10px var(--white);

      -webkit-box-shadow: var(--glow);
      -moz-box-shadow: var(--glow);
      box-shadow: var(--glow);

      transition: box-shadow 0.6s ease-in-out;
    `}
`

const SelectedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`

const GestureContainer = css`
  border-radius: 50%;
`

const GestureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GlowingGesture = styled.div<{ glow: boolean }>`
  ${Glow}
  ${GestureContainer}
`

const Description = styled.h3`
  color: var(--white);
  margin-top: 2rem;
  font-size: 1.3rem;
`

const SelectedGesture = () => {
  const { gesture, computerGesture, gameResult } = useContext(GameContext) ?? {}

  return (
    <>
      <GestureBox>
        <GlowingGesture glow={gameResult === GameResult.Win}>
          <Gesture gesture={gesture!} size="md" disabled />
        </GlowingGesture>
        <Description>you picked</Description>
      </GestureBox>
      <GestureBox>
        <GlowingGesture
          glow={!!computerGesture && gameResult === GameResult.Loose}
        >
          <FadingComponent show={!!computerGesture}>
            <Gesture gesture={computerGesture!} size="md" disabled />
          </FadingComponent>
        </GlowingGesture>
        <Description>the house picked</Description>
      </GestureBox>
    </>
  )
}

export default withFadeShow(
  SelectedGesture,
  [GameStage.Selected, GameStage.Finished],
  SelectedContainer
)
