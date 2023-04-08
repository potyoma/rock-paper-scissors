import styled, { css } from "styled-components"
import React, { ReactNode } from "react"

type ButtonSize = "sm" | "md" | "lg"

interface StyleProps {
  filled?: boolean
  size?: ButtonSize
  outline?: boolean
}

type Props = StyleProps & {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: ReactNode
}

const StyledButton = styled.button<StyleProps>`
  border-radius: 10px;
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-transform: inherit;
  border: none;

  transition: transform 0.3s linear;

  :hover {
    transform: scale(0.9);
  }

  ${({ filled }) =>
    filled
      ? css`
          background-color: var(--white);
          color: var(--dark-text);
        `
      : css`
          color: var(--white);
        `}

  ${({ outline }) =>
    outline &&
    css`
      border: 2px solid var(--outline);
    `}

  ${({ size }) => {
    switch (size) {
      case "md":
        return css`
          padding-inline: 1.3rem;
          min-width: 7rem;
          min-height: 2.7rem;
        `
      case "lg":
        return css`
          min-width: 9rem;
          mih-height: 3rem;
          padding: 0.7rem 1.8rem;
          font-size: 1.2rem;
        `
      default:
        return css`
          min-width: 5rem;
          min-height: 2.2rem;
        `
    }
  }}
`

const Button: React.FC<Props> = ({ onClick, children, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    {children}
  </StyledButton>
)

export default Button
