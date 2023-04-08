import styled, { css } from "styled-components"

const Animations = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`

export const Fading = css<{ show: boolean }>`
  ${({ show }) =>
    show
      ? css`
          animation: fadeIn 0.5s linear;
          animation-fill-mode: forwards;
        `
      : css`
          animation: fadeOut 0.5s linear;
          animation-fill-mode: forwards;
        `}
`

export default Animations
