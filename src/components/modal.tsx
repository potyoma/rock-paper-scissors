import React, { HTMLProps, ReactNode, useEffect, useId, useRef } from "react"
import styled, { css } from "styled-components"
import CloseButton from "./closeButton"
import useMediaQuery from "../hooks/useMediaQuery"
import { device } from "../styles/breakpoints"

interface StyleProps {
  isOpen: boolean
}

export type ModalProps = StyleProps & {
  onClose: () => void
}

type Props = ModalProps & { children: ReactNode; header: string }

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  @media ${device.tablet} {
    justify-content: space-between;
    text-align: start;
  }
`

const TextHeader = styled.h3`
  color: var(--outline);
  font-size: 2rem;
  width: 100%;
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

const ModalBody = styled.div`
  max-width: 100%;
`

const StyledModal = styled.div<HTMLProps<HTMLDivElement> & StyleProps>`
  background-color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  :target {
    opacity: 1;
  }

  transition: opacity 0.5s ease;

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          z-index: 1000;
        `
      : css`
          opacity: 0;
          z-index: -1;
        `}

  @media ${device.tablet} {
    padding-inline: 2rem;
    justify-content: start;
    max-width: 30rem;
    height: 30rem;
    max-height: auto;
    right: 0;
    top: 6rem;
    margin: auto;
    border-radius: 20px;
    box-shadow: 0 0 65px 25px var(--outline);
    -webkit-box-shadow: 0 0 65px 25px var(--outline);
    -moz-box-shadow: 0 0 65px 25px var(--outline);
  }
`

const Modal: React.FC<Props> = ({ isOpen, children, header, onClose }) => {
  const closeInHeader = useMediaQuery(device.tablet)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: Event) =>
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      onClose()

    if (isOpen) {
      setTimeout(
        () => document.addEventListener("click", handleClickOutside),
        1000
      )
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [onClose, isOpen])

  return (
    <StyledModal ref={modalRef} isOpen={isOpen}>
      <ModalHeader>
        <TextHeader>{header}</TextHeader>
        {closeInHeader && <CloseButton onClose={onClose} />}
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      {!closeInHeader && (
        <ModalFooter>
          <CloseButton onClose={onClose} />
        </ModalFooter>
      )}
    </StyledModal>
  )
}

export default Modal
