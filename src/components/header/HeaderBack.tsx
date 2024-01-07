import * as React from "react";
import Logotype from "../../assets/icons/Logo.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

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
              <a onClick={() => navigate(-1)}>Назад</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
