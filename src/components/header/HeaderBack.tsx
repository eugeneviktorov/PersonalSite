import * as React from "react";
import Logotype from "../../assets/icons/Logotype-site.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <a href="/">
          <div className="logotype">
            <img src={Logotype} className="logo" alt="LogoSite" />
          </div>
        </a>
        <nav>
          <ul>
            <li>
              <div className="buttonCursor" onClick={() => navigate(-1)}>
                Назад
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
