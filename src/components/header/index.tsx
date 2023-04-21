import React from "react"
import styled from "styled-components"
import Score from "./score"
import { device } from "../../styles/breakpoints"
import Logo from "./logo"

const StyledHeader = styled.div`
  border: 3px solid var(--outline);
  width: 100%;
  max-width: 87%;
  border-radius: 10px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    max-width: 70%;
  }

  @media ${device.desktop} {
    max-width: 50%;
  }
`

const Header: React.FC = () => (
  <StyledHeader>
    <Logo />
    <Score />
  </StyledHeader>
)

export default Header
