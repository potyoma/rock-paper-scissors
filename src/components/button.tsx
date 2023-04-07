import styled from "styled-components";
import React from "react";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string;
}

const StyledButton = styled.button<{}>``;

const Button: React.FC<Props> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
