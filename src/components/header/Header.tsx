import * as React from "react";
import Logotype from "../../assets/icons/Logo.svg";
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
            <img src={Logotype} className="logo" />
          </div>
        </a>
        <nav>
          <ul>
            <li>
              <a
                href="#portfolio"
                onClick={(e) => scrollToNotLink(e, "portfolio")}
              >
                работы
              </a>
            </li>
            <li>
              <a
                href="#feedback"
                onClick={(e) => scrollToNotLink(e, "feedback")}
              >
                контакты
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
