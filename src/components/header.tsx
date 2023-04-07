import React from "react"
import styled from "styled-components"
import Logo from "../assets/logo-bonus.svg"
import Score from "./score"
import { device } from "../styles/breakpoints"

const StyledHeader = styled.div`
  border: 3px solid var(--outline);
  border-radius: 10px;
  margin: 1rem auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    max-width: 50%;
  }
`

const StyledLogo = styled.img`
  width: 3rem;
`

const Header: React.FC = () => (
  <StyledHeader>
    <StyledLogo src={Logo} />
    <Score />
  </StyledHeader>
)

export default Header
