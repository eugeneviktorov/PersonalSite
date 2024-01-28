import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logotype from "../../assets/icons/Logotype-site.svg";
import "./Header.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.pathname === "/") {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

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
              <div className="buttonCursor" onClick={handleGoBack}>
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
