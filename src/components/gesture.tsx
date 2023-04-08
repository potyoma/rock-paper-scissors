import styled, { css } from "styled-components"
import Button from "./button"
import { useEffect, useState } from "react"
import { device } from "../styles/breakpoints"

interface StyleProps {
  gesture: string
  size?: "sm" | "md"
  disabled?: boolean
}

const GestureContainer = styled.div<StyleProps>`
  --transition: box-shadow 0.4s ease-out;

  background-color: var(--white);
  border-radius: 50%;
  padding: 1rem;
  width: var(--size);
  height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;

  /* TODO: Add box-shadow */

  ${({ disabled }) =>
    !disabled &&
    css`
      transition: var(--transition);
      -moz-transition: var(--transition);
      -webkit-transition: var(--transition);

      :hover {
        --shadow: 0px 0px 100px 33px var(--score);
        -webkit-box-shadow: var(--shadow);
        -moz-box-shadow: var(--shadow);
        box-shadow: var(--shadow);
      }
    `}

  ${({ size }) =>
    size === "md"
      ? css`
          --size: 3rem;
          --border-size: 1rem;

          @media ${device.tablet} {
            --size: 5rem;
            --border-size: 1.4rem;
          }
        `
      : css`
          --size: 3rem;
          --border-size: 1rem;

          @media ${device.tablet} {
            --size: 5rem;
            --border-size: 1.4rem;
          }
        `}

  ${({ gesture }) => css`
    border: var(--border-size) solid var(--${gesture}-gradient);
  `}
`

const GestureImage = styled.img``

type Props = StyleProps & { onSelect?: (gesture: string) => void }

const Gesture: React.FC<Props> = ({ gesture, size, onSelect }) => {
  const [image, setImage] = useState("")

  useEffect(() => {
    gesture &&
      (async () => {
        const img = await import(`../assets/icon-${gesture}.svg`)
        img?.default && setImage(img.default ?? "")
      })()
  }, [gesture])

  return (
    <Button onClick={() => onSelect?.(gesture)} disabled={!onSelect}>
      <GestureContainer size={size} gesture={gesture} disabled={!onSelect}>
        {image && <GestureImage src={image} />}
      </GestureContainer>
    </Button>
  )
}

export default Gesture
