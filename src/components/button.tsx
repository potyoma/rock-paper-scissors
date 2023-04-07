import styled from "styled-components"
import React from "react"

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: string
}

interface StyledProps {
  filled?: boolean
}

const StyledButton = styled.button<StyledProps>`
  width: 6rem;
  height: 2rem;
  border: 2px solid var(--outline);
  color: var(--white);
  border-radius: 10px;
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
`

const Button: React.FC<Props> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)

export default Button
