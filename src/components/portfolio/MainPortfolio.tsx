import * as React from "react";
import "./Portfolio.css";
import "../about/About.css";
import PortfolioItem from "./PortfolioData";

function App() {
  const portfolioData = require("../../assets/dataJson/Portfolio.json");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <div id="portfolio"></div>
      <div className="blockHeader">
        <div className="titleBlockHeader">Портфолио</div>
        {/* Портфолио */}
        {portfolioData.map((item, index) => (
          <PortfolioItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
