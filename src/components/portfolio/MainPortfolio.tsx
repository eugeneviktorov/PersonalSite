import * as React from "react";
import PortfolioItem from "./PortfolioData";
import TitleSection from "../TitleSection";
import PageContainer from "../PageContainer";

function MainPortfolio() {
  const portfolioData = require("../../assets/dataJson/Portfolio.json");

  // Переброс экрана в верхнюю позицию
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer idSection={"portfolio"}>
      <TitleSection text={"Портфолио"} />
      {/* Портфолио */}
      {portfolioData.map((item, index) => (
        <PortfolioItem key={index} item={item} />
      ))}
    </PageContainer>
  );
}

export default MainPortfolio;
