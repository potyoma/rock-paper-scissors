import styled, { css } from "styled-components"
import Button from "./button"
import { useEffect, useState } from "react"
import { device } from "../styles/breakpoints"

interface StyleProps {
  gesture: string
  size?: "sm" | "md"
}

const GestureContainer = styled.div<StyleProps>`
  --size: 3rem;
  --border-size: 1rem;

  background-color: var(--white);
  border-radius: 50%;
  padding: 1rem;
  width: var(--size);
  height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;

  /* TODO: Add box-shadow */

  ${({ size }) => css``}

  ${({ gesture }) => css`
    border: var(--border-size) solid var(--${gesture}-gradient);
  `}

  @media ${device.tablet} {
    --size: 5rem;
    --border-size: 1.4rem;
  }
`

const GestureImage = styled.img``

type Props = StyleProps & { onSelect: (gesture: string) => void }

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
    <Button onClick={() => onSelect(gesture)}>
      <GestureContainer size={size} gesture={gesture}>
        {image && <GestureImage src={image} />}
      </GestureContainer>
    </Button>
  )
}

export default Gesture
