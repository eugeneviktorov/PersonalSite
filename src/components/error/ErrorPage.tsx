import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "../ColorTheme";
import Logo from "../../assets/icons/Logotype-site.svg";

function ErrorPage() {
  return (
    <Container>
      <TitleNotFound>
        Страница
        <br />
        не найдена
      </TitleNotFound>
      <ErrorNumber>404</ErrorNumber>
      <Logotype src={Logo} />
      <ContainerButton>
        <Button href={"/"}>На главную</Button>
      </ContainerButton>
    </Container>
  );
}

export default ErrorPage;

const Container = styled.div`
  text-align: center;
`;

const TitleNotFound = styled.div`
  color: ${GlobalColors.ColorDarkBlue};
  margin-top: 1em;
  text-align: center;

  @media (min-width: 280px) {
    font-size: 28px;
  }

  @media (min-width: 375px) {
    font-size: 38px;
  }

  @media (min-width: 2560px) {
    font-size: 58px;
  }
`;

const ErrorNumber = styled.div`
  color: ${GlobalColors.ColorGray};
  margin-top: 0.2em;
  text-align: center;
  font-size: 108px;

  @media (min-width: 2560px) {
    font-size: 152px;
  }
`;

const Logotype = styled.img`
  margin-top: 1.5em;

  @media (min-width: 280px) {
    width: 250px;
  }

  @media (min-width: 375px) {
    width: 350px;
  }

  @media (min-width: 425px) {
    width: 400px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 2560px) {
    width: 700px;
  }
`;

const ContainerButton = styled.div`
  -webkit-tap-highlight-color: transparent;
  margin-top: 2em;
`;

const Button = styled.a`
  background-color: ${GlobalColors.ColorBlue};
  color: ${GlobalColors.ColorWhite};
  padding: 0.8em 1.5em 0.8em 1.5em;
  border-radius: 1em;
  transition: 0.5s;
  margin-top: 5em;
  text-decoration: none;

  @media (min-width: 280px) {
    font-size: 18px;
  }

  @media (min-width: 320px) {
    font-size: 20px;
  }

  @media (min-width: 425px) {
    font-size: 22px;
  }

  @media (min-width: 2560px) {
    font-size: 28px;
  }

  &:hover {
    background-color: ${GlobalColors.ColorBlueSelect};
  }

  &:active {
    background-color: ${GlobalColors.ColorDarkBlue};
    transition: 0s;
  }
`;
