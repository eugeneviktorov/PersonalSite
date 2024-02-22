import * as React from "react";
import AppPageView from "../components/AppPageView";
import Preload from "../components/preload/Preload";
import Header from "../components/header/Header";
import About from "../components/about/About";
import InitialPortfolio from "../components/portfolio/InitialPortfolio";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";

function Home() {
  document.title = "Викторов";
  return (
    <AppPageView>
      <Preload />
      <Header main={"main"} />
      <About />
      <InitialPortfolio />
      <Contacts />
      <Footer />
    </AppPageView>
  );
}

export default Home;
