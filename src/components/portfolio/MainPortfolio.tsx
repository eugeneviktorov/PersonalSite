import * as React from "react";
import "./Portfolio.css";
import "../about/About.css";
import PortfolioItem from "./PortfolioData";
import TitleBlockHeader from "./TitleBlockHeader";

function App() {
  const portfolioData = require("../../assets/dataJson/Portfolio.json");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div id="portfolio"></div>
      <div className="blockHeader">
        <TitleBlockHeader text={"Портфолио"} />
        {/* Портфолио */}
        {portfolioData.map((item, index) => (
          <PortfolioItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
