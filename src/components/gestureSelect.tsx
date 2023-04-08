import React, { useContext } from "react"
import styled from "styled-components"
import { GameContext, GameStage } from "../contexts/gameContext"
import background from "../assets/bg-pentagon.svg"
import Gesture from "./gesture"
import { Fading } from "../styles/animations"
import withFadeShow, { Show } from "../hoks/withFadeShow"

const GestureContainer = styled(Fading)`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 85%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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

const GestureSelect: React.FC<Show> = ({ show }) => {
  const { onSelect } = useContext(GameContext) ?? {}

  const handleSelect = (gesture: string) => onSelect?.(gesture)

  return (
    <GestureContainer show={show}>
      <Gesture gesture="scissors" onSelect={handleSelect} />
      <MiddleRow>
        <Gesture gesture="spock" onSelect={handleSelect} />
        <Gesture gesture="paper" onSelect={handleSelect} />
      </MiddleRow>
      <LastRow>
        <Gesture gesture="lizard" onSelect={handleSelect} />
        <Gesture gesture="rock" onSelect={handleSelect} />
      </LastRow>
    </GestureContainer>
  )
}

export default withFadeShow(GestureSelect, GameStage.Select)