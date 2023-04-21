import styled from "styled-components"
import Button from "../core/button"
import { device } from "../../styles/breakpoints"

interface Props {
  onClick: () => void
}

const StyledRulesButton = styled.div`
  @media ${device.tablet} {
    margin-inline: 2rem;
    align-self: flex-end;
  }

  @media ${device.desktop} {
    margin-inline: 3rem;
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
