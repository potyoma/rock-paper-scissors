import styled from "styled-components"
import Button from "../core/button"
import { device } from "../../styles/breakpoints"

interface Props {
  onClick: () => void
}

const StyledRulesButton = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    bottom: 2rem;
    right: 2rem;
    left: auto;
  }

  @media ${device.desktop} {
    bottom: 3rem;
    right: 3rem;
    left: auto;
  }
`

const RulesButton: React.FC<Props> = ({ onClick }) => (
  <StyledRulesButton>
    <Button onClick={onClick} size="lg" outline>
      Rules
    </Button>
  </StyledRulesButton>
)

export default RulesButton
