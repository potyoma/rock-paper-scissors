import React from "react"
import styled from "styled-components"

const StyledScore = styled.div`
  color: var(--score);
  background-color: var(--white);
  padding: 0.3rem 1rem;
  border-radius: 10px;
  text-align: center;
  
`

interface Props {
  score: number
}

const Score: React.FC<Props> = ({ score }) => (
  <StyledScore>
    <h4>score</h4>
    {score}
  </StyledScore>
)

export default Score
