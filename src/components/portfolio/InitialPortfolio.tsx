import * as React from "react";
import "./Portfolio.css";
import "../about/About.css";
import { Link } from "react-router-dom";
import PortfolioItem from "./PortfolioData";

function App() {
  const portfolioData = require("../../assets/dataJson/InitialPortfolio.json");
  return (
    <div className="App">
      <div id="portfolio"></div>
      <div className="blockHeader">
        <div className="titleBlockHeader">Портфолио</div>
        {/* Портфолио */}
        {portfolioData.map((item, index) => (
          <PortfolioItem key={index} item={item} />
        ))}
        {/* Все работы */}
        <Link to="/portfolio">
          <div className="buttonCases">Все работы</div>
        </Link>
      </div>
    </div>
  );
}

export default App;
