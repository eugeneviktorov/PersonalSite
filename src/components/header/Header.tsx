import * as React from "react";
import Logotype from "../../assets/icons/Logotype-site.svg";
import "./Header.css";

function App() {
  const scrollToNotLink = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <header>
        <a href="/">
          <div className="logotype">
            <img src={Logotype} className="logo" alt="LogoSite" />
          </div>
        </a>
        <nav>
          <ul>
            <li>
              <div
                className="buttonCursor"
                onClick={(e) => scrollToNotLink(e, "portfolio")}
              >
                работы
              </div>
            </li>
            <li>
              <div
                className="buttonCursor"
                onClick={(e) => scrollToNotLink(e, "feedback")}
              >
                контакты
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
