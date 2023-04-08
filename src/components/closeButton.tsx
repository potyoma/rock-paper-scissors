import React from "react"
import Button from "./button"
import styled from "styled-components"

const StyledIcon = styled.div`
  max-width: 2rem;
  display: flex;
  justify-content: center;
  margin: auto;
`

const CloseButton: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <Button onClick={onClose} size="md">
    <StyledIcon>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path
          fill="#3B4262"
          fill-rule="evenodd"
          d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
          opacity=".25"
        />
      </svg>
    </StyledIcon>
  </Button>
)

export default CloseButton
