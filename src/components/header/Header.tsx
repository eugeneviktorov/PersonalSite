import * as React from "react";
import Logotype from "../../assets/icons/Logo.svg";
import "./Header.css";

function App() {
  return (
    <div className="App">
      <header>
        <a href="https://viktorovvv.ru">
          <div className="logotype">
            <img src={Logotype} className="logo" />
          </div>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#portfolio">работы</a>
            </li>
            <li>
              <a href="#feedback">контакты</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
