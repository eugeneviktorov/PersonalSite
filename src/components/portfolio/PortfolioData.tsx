import * as React from "react";
import styled from "styled-components";
import { GlobalColors, GlobalShadows } from "../ColorTheme";
import LinkTitle from "../LinkTitle";

const PortfolioData = ({ item }: { item: any }) => {
  return (
    <Container>
      <HideImage href={item.link}>
        <PortfolioPhoto
          src={require(`../../assets/image/${item.image}`)}
          alt={item.title}
        />
      </HideImage>
      <ContainerName>
        <LinkTitle link={item.link} title={item.title} />
      </ContainerName>
      <TextAbout>{item.description}</TextAbout>
    </Container>
  );
};

export default PortfolioData;

const Container = styled.div`
  background-color: ${GlobalColors.ColorWhite};
  box-shadow: ${GlobalShadows.BoxShadow};

  @media (min-width: 280px) {
    padding: 0.5em;
    display: block;
    border-radius: 1em;
    margin-bottom: 2em;
  }

  @media (min-width: 375px) {
    padding: 0.7em;
    border-radius: 1.5em;
  }

  @media (min-width: 768px) {
    width: 44%;
    display: inline-block;
    margin-bottom: 2.6em;

    &:nth-child(2n) {
      margin-right: 2.6em;
    }
  }

  @media (min-width: 1024px) {
    width: 45%;
    padding: 0.8em;
    margin-bottom: 1.3em;

    &:nth-child(2n) {
      margin-right: 1.3em;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 1.5em;

    &:nth-child(2n) {
      margin-right: 1.5em;
    }
  }
`;

const HideImage = styled.a`
  border-radius: 1em;
  overflow: hidden;
  display: inline-block;
`;

const PortfolioPhoto = styled.img`
  width: 100%;
  display: block;
  transition: 0.5s;

  &:hover {
    scale: 1.1;
  }
`;

const ContainerName = styled.a`
  margin-top: 0.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-tap-highlight-color: initial;
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */

  @media (min-width: 280px) {
    font-size: 22px;
  }

  @media (min-width: 375px) {
    font-size: 24px;
  }
`;

const TextAbout = styled.div`
  color: ${GlobalColors.ColorDarkBlue};
  margin-top: 0.3em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

  @media (min-width: 375px) {
    font-size: 18px;
  }
`;
