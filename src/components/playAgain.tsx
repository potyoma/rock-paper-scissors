import styled from "styled-components"
import withFadeShow from "../hoks/withFadeShow"
import { GameContext, GameStage } from "../contexts/gameContext"
import Button from "./button"
import { useContext, useEffect, useState } from "react"
import { GameResult } from "../core"

const PlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Description = styled.h2`
  color: var(--white);
  font-size: 2.5rem;
  line-height: 2rem;
  margin: 1rem;
`

const PlayAgain = () => {
  const [description, setDescription] = useState("")

  const { restore, gameResult } = useContext(GameContext) ?? {}

  const handleClick = () => restore?.()

  useEffect(() => {
    const getText = (gameResult?: GameResult) => {
      switch (gameResult) {
        case GameResult.Draw:
          return "draw"
        case GameResult.Win:
          return "you win"
        case GameResult.Loose:
          return "you loose"
        default:
          return ""
      }
    }

    setDescription(getText(gameResult))
  }, [gameResult])

  return (
    <>
      <Description>{description}</Description>
      <Button onClick={handleClick} size="lg" filled>
        Play again
      </Button>
    </>
  )
}

export default withFadeShow(PlayAgain, GameStage.Finished, PlayAgainContainer)
