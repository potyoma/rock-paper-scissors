import React, { useContext } from "react"
import styled from "styled-components"
import { ScoreContext } from "../../contexts/scoreContext"

const StyledScore = styled.div`
  background-color: var(--white);
  width: 6rem;
  padding-inline: 0.8rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ScoreHeader = styled.h4`
  color: var(--score);
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
`

const ScoreNumber = styled.h3`
  color: var(--dark-text);
  font-size: 3rem;
  line-height: 3rem;
  margin: 0;
`

const Score: React.FC = () => {
  const { score } = useContext(ScoreContext)

  return (
    <StyledScore>
      <ScoreHeader>score</ScoreHeader>
      <ScoreNumber>{score}</ScoreNumber>
    </StyledScore>
  )
}

export default Score
