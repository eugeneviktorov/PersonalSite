import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalColors } from "../ColorTheme";
import PortfolioData from "./PortfolioData";
import TitleSection from "../TitleSection";
import PageContainer from "../PageContainer";

function InitialPortfolio() {
  const portfolioData = require("../../assets/dataJson/Portfolio.json");

  // Показ избранных записей
  const filteredPortfolio = portfolioData.filter((item) => item.favorite);

  return (
    <PageContainer idSection={"portfolio"}>
      <TitleSection text={"Портфолио"} />
      {/* Портфолио */}
      {filteredPortfolio.map((item, index) => (
        <PortfolioData key={index} item={item} />
      ))}
      {/* Все работы */}
      <Link to="/portfolio">
        <ButtonCases>Все работы</ButtonCases>
      </Link>
    </PageContainer>
  );
}

export default InitialPortfolio;

const ButtonCases = styled.div`
  background-color: ${GlobalColors.ColorBlue};
  color: ${GlobalColors.ColorWhite};
  text-decoration: none;
  padding: 0.9em 1.3em 0.9em 1.3em;
  display: inline-block;
  border-radius: 1em;
  transition: 0.5s;

  @media (min-width: 280px) {
    font-size: 16px;
  }

  @media (min-width: 320px) {
    font-size: 18px;
  }

  @media (min-width: 425px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    margin-top: 0em;
  }

  @media (min-width: 2560px) {
    font-size: 26px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${GlobalColors.ColorBlueSelect};
    }

    &:active {
      background-color: ${GlobalColors.ColorDarkBlue};
      transition: 0s;
    }
  }

  @media (hover: none) {
    &:active {
      background-color: ${GlobalColors.ColorDarkBlue};
      transition: 0s;
    }
  }
`;
