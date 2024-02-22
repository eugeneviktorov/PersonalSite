import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "../ColorTheme";

function Explanation() {
  return (
    <Container>
      Создание простых и понятных продуктов, которые помогут пользователям
      быстро и эффективно решать свои задачи
    </Container>
  );
}

export default Explanation;

const Container = styled.div`
  color: ${GlobalColors.ColorDarkGray};
  margin-top: 1.5em;
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */

  @media (min-width: 280px) {
    font-size: 16px;
  }

  @media (min-width: 320px) {
    font-size: 18px;
  }

  @media (min-width: 375px) {
    font-size: 20px;
  }

  @media (min-width: 425px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1440px) {
    width: 95%;
  }
`;
