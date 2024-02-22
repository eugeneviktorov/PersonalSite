import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "../ColorTheme";
import LinkTitle from "../LinkTitle";

function Footer() {
  return (
    <Container>
      <ContainerTitle>
        Физ.лицо
        <br />
        Викторов Евгений
      </ContainerTitle>
      <ContainerTitle>
        +7 (913) 684-55-43
        <br />
        eviktorovvv@gmail.com
      </ContainerTitle>
      <ContainerTitle>
        <LinkTitle
          link={"../documentation/terms-of-use"}
          title={"Пользовательское соглашение"}
        />
      </ContainerTitle>
      <ContainerTitle>
        viktorovvv.ru
        <br />© 2023 - 2024
      </ContainerTitle>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  color: ${GlobalColors.ColorDarkGray};
  text-align: center;
  margin-top: 8em;
  margin-bottom: 8em;
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */

  @media (min-width: 280px) {
    font-size: 12px;
  }

  @media (min-width: 320px) {
    font-size: 14px;
  }

  @media (min-width: 425px) {
    font-size: 16px;
  }

  @media (min-width: 2560px) {
    font-size: 18px;
  }
`;

const ContainerTitle = styled.div`
  margin-top: 1.5em;
`;
