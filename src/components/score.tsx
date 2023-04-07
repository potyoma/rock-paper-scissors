import React, { useContext } from "react"
import styled from "styled-components"
import { ScoreContext } from "../contexts/scoreContext"

const StyledScore = styled.div`
  color: var(--score);
  background-color: var(--white);
  padding: 0.3rem 1rem;
  border-radius: 10px;
  text-align: center;
`

const Score: React.FC = () => {
  const { score } = useContext(ScoreContext)

  return (
    <StyledScore>
      <h4>score</h4>
      {score}
    </StyledScore>
  )
}

export default Score
