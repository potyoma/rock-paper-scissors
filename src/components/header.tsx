import React from "react"
import styled from "styled-components"
import Logo from "../assets/logo-bonus.svg"
import Score from "./score"

const StyledHeader = styled.div<{}>`
  border: 3px solid var(--outline);
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`

const StyledLogo = styled.img`
  width: 3rem;
`

interface Props {
  score: number
}

const Header: React.FC<Props> = ({ score }) => (
  <StyledHeader>
    <StyledLogo src={Logo} />
    <Score score={score} />
  </StyledHeader>
)

export default Header
