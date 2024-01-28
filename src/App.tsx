import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Использовать для github-pages
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Использовать для hosting service
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
