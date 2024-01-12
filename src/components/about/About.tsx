import * as React from "react";
import "./About.css";
import WorkTitle from "./WorkTitle";

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
        <WorkTitle TitleOne={"Разработка"} TitleTwo={"UI - Дизайн"} />
        <WorkTitle TitleOne={"Поддержка"} TitleTwo={"Тестирование"} />
      </div>
    </div>
  );
}

export default App;
