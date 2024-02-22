import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "../ColorTheme";

function AboutTitle() {
  return (
    <Container>
      Разработка организованных цифровых решений, <br />
      <span> для пользователей</span>
    </Container>
  );
}

export default AboutTitle;

const Container = styled.div`
  color: ${GlobalColors.ColorDarkBlue};
  display: inline-block;
  margin-top: 2.5em;
  text-align: left;
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */

  @media (min-width: 280px) {
    font-size: 26px;
  }

  @media (min-width: 320px) {
    font-size: 28px;
  }

  @media (min-width: 375px) {
    font-size: 34px;
  }

  @media (min-width: 425px) {
    font-size: 38px;
  }

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 1024px) {
    font-size: 44px;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
  }

  span {
    color: ${GlobalColors.ColorBlue};
  }
`;
