import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "./ColorTheme";

function TitleSection({ text }: { text: string }) {
  return <Text>{text}</Text>;
}

export default TitleSection;

const Text = styled.div`
  color: ${GlobalColors.ColorBlue};
  margin-bottom: 1em;
  display: inline-block;
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */

  @media (min-width: 280px) {
    font-size: 28px;
    margin-top: 2em;
  }

  @media (min-width: 320px) {
    font-size: 30px;
    margin-top: 2em;
  }

  @media (min-width: 375px) {
    font-size: 32px;
    margin-top: 3em;
    width: 80%;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
    margin-top: 4em;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
    margin-top: 5em;
  }
`;
