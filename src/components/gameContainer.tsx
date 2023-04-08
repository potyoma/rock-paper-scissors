import styled from "styled-components"
import { device } from "../styles/breakpoints"

const GameContainer = styled.div`
  --cont-width: 22rem;
  --cont-height: 22rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: var(--cont-width);
  height: var(--cont-height);
  margin: auto;

  @media ${device.tablet} {
    --cont-width: 38rem;
    --cont-height: 46rem;
  }
`

export default GameContainer
