import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "../ColorTheme";

function ButtonNavigate({ title, onClick }) {
  return (
    <Container>
      <Button onClick={onClick}>{title}</Button>
    </Container>
  );
}

export default ButtonNavigate;

const Container = styled.div`
  padding-top: 0.8em;
  padding-bottom: 0.8em;
`;

const Button = styled.div`
  color: ${GlobalColors.ColorDarkBlue};
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 10em;
  transition: 0.7s;
  cursor: pointer;

  @media (min-width: 280px) {
    padding: 0.2em;
    font-size: 14px;
    margin-right: 0.1em;
  }

  @media (min-width: 320px) {
    padding: 0.4em;
    font-size: 14px;
    margin-right: 0.7em;
  }

  @media (min-width: 425px) {
    padding: 0.5em;
    font-size: 16px;
    margin-right: 0.7em;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    margin-right: 2em;
  }

  @media (hover: hover) {
    &:hover {
      background: ${GlobalColors.ColorBlue};
      color: ${GlobalColors.ColorWhite};
    }
    &:active {
      background: ${GlobalColors.ColorDarkBlue};
      color: ${GlobalColors.ColorWhite};
      transition: 0s;
    }
  }

  @media (hover: none) {
    &:active {
      background: ${GlobalColors.ColorDarkBlue};
      color: ${GlobalColors.ColorWhite};
      transition: 0s;
    }
  }
`;
