import * as React from "react";
import "./Error.css";
import Logo from "../../assets/icons/Logotype-site.svg";

function App() {
  return (
    <div>
      <div className="pageNotFound">
        Страница
        <br />
        не найдена
      </div>
      <div className="errorNumber">404</div>
      <div className="logoPosition">
        <img src={Logo} className="logoSize" alt="LogoSite" />
      </div>
      <div className="buttonPosition">
        <a href="/">
          <div className="buttonLink">
            <div className="buttonText">На главную</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
