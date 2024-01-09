import * as React from "react";
import "./Error.css";
import Logo from "../../assets/icons/Logo.svg";

function App() {
  return (
    <div className="App">
      <div className="pageNotFound">
        Страница
        <br />
        не найдена
      </div>
      <div className="errorNumber">404</div>
      <div className="photo">
        <img src={Logo} className="photo_settings" />
      </div>
      <div className="buttonPosition">
        <a href="https://viktorovvv.ru">
          <div className="buttonLink">
            <div className="buttonText">На главную</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;