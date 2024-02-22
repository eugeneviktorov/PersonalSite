import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "./components/ColorTheme";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Использовать для github-pages
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Использовать для hosting service
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

import Documentation from "./pages/Documentation";

const App: React.FC = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="documentation/:documentType"
            element={<Documentation />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;

const Container = styled.div`
  br {
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */
  }

  ul {
    padding-left: 1em;
  }

  *::selection {
    background-color: ${GlobalColors.ColorBlueSelectTitle};
  }
`;
