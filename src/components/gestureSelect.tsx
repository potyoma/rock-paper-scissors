import React, { useContext } from "react"
import styled from "styled-components"
import { GameContext, GameStage } from "../contexts/gameContext"
import background from "../assets/bg-pentagon.svg"
import Gesture from "./gesture"
import withFadeShow from "../hoks/withFadeShow"
import { device } from "../styles/breakpoints"

const GestureContainer = styled.div`
  background: url(${background}) no-repeat center;
  background-size: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  --cont-width: 22rem;
  --cont-height: 22rem;

  width: var(--cont-width);
  height: var(--cont-height);

  @media ${device.tablet} {
    --cont-width: 38rem;
    --cont-height: 46rem;
  }
`

const MiddleRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const LastRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 2.4rem;
`

const GestureSelect: React.FC = () => {
  const { onSelect } = useContext(GameContext) ?? {}

  const handleSelect = (gesture: string) => onSelect?.(gesture)

  return (
    <>
      <div>
        <Gesture gesture="scissors" onSelect={handleSelect} />
      </div>
      <MiddleRow>
        <Gesture gesture="spock" onSelect={handleSelect} />
        <Gesture gesture="paper" onSelect={handleSelect} />
      </MiddleRow>
      <LastRow>
        <Gesture gesture="lizard" onSelect={handleSelect} />
        <Gesture gesture="rock" onSelect={handleSelect} />
      </LastRow>
    </>
  )
}

export default withFadeShow(GestureSelect, GameStage.Select, GestureContainer)
