import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "../ColorTheme";

function WorkTitle({
  TitleTop,
  TitleBottom,
}: {
  TitleTop: string;
  TitleBottom: string;
}) {
  return (
    <Container>
      <ul>
        <li>{TitleTop}</li>
      </ul>
      <ul>
        <li>{TitleBottom}</li>
      </ul>
    </Container>
  );
}

export default WorkTitle;

const Container = styled.div`
  color: ${GlobalColors.ColorDarkBlue};
  display: inline-block;
  margin-right: 30%;
  margin-top: 1em;
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */

  @media (min-width: 280px) {
    font-size: 20px;
  }

  @media (min-width: 320px) {
    font-size: 22px;
  }

  @media (min-width: 375px) {
    font-size: 24px;
  }

  @media (min-width: 425px) {
    font-size: 26px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
    margin-right: 3em;
  }
`;
