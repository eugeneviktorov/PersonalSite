import * as React from "react";
import AppPageView from "../components/AppPageView";
import Preload from "../components/preload/Preload";
import Header from "../components/header/Header";
import MainPortfolio from "../components/portfolio/MainPortfolio";
import Footer from "../components/footer/Footer";

function Portfolio() {
  document.title = "Портфолио";
  return (
    <AppPageView>
      <Preload />
      <Header back={"back"} />
      <MainPortfolio />
      <Footer />
    </AppPageView>
  );
}

export default Portfolio;
