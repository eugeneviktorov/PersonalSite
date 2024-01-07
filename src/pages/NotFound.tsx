import * as React from "react";
import "../App.css";
import Preload from "../components/preload/Preload";
import Error from "../components/error/Error";
import Footer from "../components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Preload />
      <Error />
      <Footer />
    </div>
  );
}

export default App;
