import * as React from "react";
import styled from "styled-components";
import ContactsSocial from "./ContactsSocial";
import { GlobalColors } from "../../ColorTheme";
import GitHub from "../../../assets/icons/GitHub.svg";
import Figma from "../../../assets/icons/Figma.svg";
import Linkedin from "../../../assets/icons/Linkedin.svg";
import LinkTitle from "../../LinkTitle";

const ContactsData = ({
  name,
  number,
  email,
}: {
  name: string;
  number: string;
  email: string;
}) => {
  return (
    <Container>
      {/* Персональные данные */}
      <Name>{name}</Name>
      <ContainerContacts>
        <LinkTitle link={`tel: ${number}`} title={number} />
      </ContainerContacts>
      <ContainerContacts>
        <LinkTitle link={`mailto:${email}`} title={email} />
      </ContainerContacts>
      {/* Контактные ссылки */}
      <ContainerSocial>
        <ContactsSocial
          link={"https://github.com/eugeneviktorov"}
          icon={GitHub}
        />
        <ContactsSocial
          link={"https://www.figma.com/@eugeneviktorov"}
          icon={Figma}
        />
        <ContactsSocial
          link={"https://www.linkedin.com/in/eugeneviktorov"}
          icon={Linkedin}
        />
      </ContainerSocial>
    </Container>
  );
};

export default ContactsData;

const Container = styled.div`
  @media (min-width: 280px) {
    margin-top: 2em;
    text-align: center;
  }

  @media (min-width: 768px) {
    margin-top: 0em;
    margin-left: 3em;
    display: inline-block;
    vertical-align: top;
    text-align: left;
  }
`;

const Name = styled.div`
  color: ${GlobalColors.ColorDarkBlue};
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */
  -webkit-tap-highlight-color: initial;

  @media (min-width: 280px) {
    font-size: 18px;
  }

  @media (min-width: 320px) {
    font-size: 20px;
  }

  @media (min-width: 375px) {
    .name {
      font-size: 22px;
    }
  }

  @media (min-width: 425px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    width: 14em;
  }

  @media (min-width: 1440px) {
    width: 13em;
    font-size: 28px;
  }
`;

const ContainerContacts = styled.div`
  margin-top: 0.5em;
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */
  -webkit-tap-highlight-color: initial;

  @media (min-width: 280px) {
    font-size: 18px;
  }

  @media (min-width: 320px) {
    font-size: 20px;
  }

  @media (min-width: 375px) {
    font-size: 22px;
  }

  @media (min-width: 425px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    width: 14em;
  }

  @media (min-width: 1440px) {
    width: 13em;
    font-size: 28px;
  }
`;

const ContainerSocial = styled.div`
  @media (min-width: 280px) {
    width: 100%;
    margin-top: 1em;
  }

  @media (min-width: 768px) {
    width: 21em;
    margin-top: 0em;
  }
`;
