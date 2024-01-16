import * as React from "react";
import Logotype from "../../assets/icons/Preload.svg";
import "./Preload.css";

function App() {
  React.useEffect(() => {
    // Стартовый логотип (загрузка)
    const preloadElement = document.querySelector(".preload");

    const hidePreload = () => {
      preloadElement.classList.add("invisible");
    };

    const timeoutId = setTimeout(hidePreload, 1000);
    // Очистка таймаута при размонтировании компонента
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="preload">
        <img src={Logotype} className="preLogo" width="300" alt="preload" />
      </div>
    </div>
  );
}

export default App;
