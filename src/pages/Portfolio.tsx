import * as React from "react";
import "../App.css";
import Preload from "../components/preload/Preload";
import HeaderBack from "../components/header/HeaderBack";
import MainPortfolio from "../components/portfolio/MainPortfolio";
import Footer from "../components/footer/Footer";

function App() {
  document.title = "Портфолио";
  return (
    <div>
      <Preload />
      <HeaderBack />
      <MainPortfolio />
      <Footer />
    </div>
  );
}

export default App;
