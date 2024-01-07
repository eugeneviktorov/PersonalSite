import * as React from "react";
import "./About.css";

function App() {
  return (
    <div className="App">
      <div className="blockHeader">
        <div className="about">
          Разработка организованных цифровых решений,
          <br />
          <span> для пользователей</span>
        </div>
        <div className="explanation">
          Создание простых и понятных продуктов, которые помогут пользователям
          быстро и эффективно решать свои задачи
        </div>
        <div className="workTitle">
          <ul>
            <li>Разработка</li>
          </ul>
          <ul>
            <li>UI - Дизайн</li>
          </ul>
        </div>
        <div className="workTitle">
          <ul>
            <li>Поддержка</li>
          </ul>
          <ul>
            <li>Тестирование</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
