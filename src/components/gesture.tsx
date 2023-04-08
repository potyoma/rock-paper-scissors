import styled, { css } from "styled-components"
import Button from "./button"
import { useEffect, useState } from "react"

interface StyleProps {
  gesture: string
  size?: "sm" | "md"
}

const GestureContainer = styled.div<StyleProps>`
  background-color: var(--white);
  border-radius: 50%;
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ size }) => css``}

  ${({ gesture }) => css`
    border: 1rem solid var(--${gesture}-gradient);
  `}
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
