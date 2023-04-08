import { useContext } from "react"
import styled from "styled-components"
import { GameContext, GameStage } from "../contexts/gameContext"
import background from "../assets/bg-pentagon.svg"
import Gesture from "./gesture"

const GestureContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const GestureSelect = () => {
  const { stage, onSelect } = useContext(GameContext) ?? {}

  const handleSelect = (gesture: string) => onSelect?.(gesture)

  return stage === GameStage.Select ? (
    <GestureContainer>
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
  ) : null
}

export default GestureSelect
