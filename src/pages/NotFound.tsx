import * as React from "react";
import "../App.css";
import Preload from "../components/preload/Preload";
import Error from "../components/error/Error";
import Footer from "../components/footer/Footer";

function App() {
  document.title = "404";
  return (
    <div>
      <Preload />
      <Error />
      <Footer />
    </div>
  );
}

export default App;
