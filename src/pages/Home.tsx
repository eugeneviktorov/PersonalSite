import * as React from "react";
import "../App.css";
import Preload from "../components/preload/Preload";
import Header from "../components/header/Header";
import About from "../components/about/About";
import InitialPortfolio from "../components/portfolio/InitialPortfolio";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";

function App() {
  document.title = "Викторов";
  return (
    <div className="app">
      <Preload />
      <Header />
      <About />
      <InitialPortfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
