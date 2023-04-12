import styled from "styled-components"
import logo from "../../assets/logo-bonus.svg"

const StyledLogo = styled.img`
  width: 6rem;
`

const Logo = () => (
  <StyledLogo src={logo} alt="Rock, Paper, Scissors, Lizard, Spock logo" />
)

export default Logo
