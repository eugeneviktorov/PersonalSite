import * as React from "react";
import styled from "styled-components";
import { GlobalColors, GlobalShadows } from "../../ColorTheme";

const ContactsSocial = ({ link, icon }: { link: string; icon: any }) => {
  return (
    <Container href={link}>
      <Icon src={icon} />
    </Container>
  );
};

export default ContactsSocial;

const Container = styled.a`
  display: inline-block;
  margin: 0.5em;

  @media (min-width: 768px) {
    margin: 0;
    margin-top: 1em;
    margin-right: 1em;
  }
`;

const Icon = styled.img`
  box-shadow: ${GlobalShadows.BoxShadow};
  background-color: ${GlobalColors.ColorWhite};
  padding: 0.5em;
  transition: 0.2s;

  @media (min-width: 280px) {
    width: 40px;
    border-radius: 0.8em;
  }

  @media (min-width: 320px) {
    width: 50px;
    border-radius: 1em;
  }

  &:hover {
    scale: 1.1;
  }
`;
