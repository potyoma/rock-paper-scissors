import React, { ComponentType, useContext } from "react"
import useFade from "../hooks/useFade"
import { GameContext, GameStage } from "../contexts/gameContext"
import { Fading } from "../styles/animations"
import styled, { StyledComponent } from "styled-components"

const withFadeShow = <TProps extends object>(
  Component: ComponentType<TProps>,
  stage: GameStage,
  container: StyledComponent<"div", any, {}, never>
): React.FC<TProps> => {
  const Container = styled(container)`
    ${Fading}
  `

  return props => {
    const { stage: currentStage } = useContext(GameContext) ?? {}

    const { show, animate } = useFade<GameStage>(
      currentStage,
      st => st === stage
    )

    return show ? (
      <Container show={animate}>
        <Component {...(props as TProps)} />
      </Container>
    ) : null
  }
}

export default withFadeShow
