import * as React from "react";
import PageContainer from "../PageContainer";
import AboutTitle from "./AboutTitle";
import Explanation from "./Explanation";
import WorkTitle from "./WorkTitle";

function About() {
  return (
    <PageContainer>
      <AboutTitle />
      <Explanation />
      <WorkTitle TitleTop={"Разработка"} TitleBottom={"UI - Дизайн"} />
      <WorkTitle TitleTop={"Поддержка"} TitleBottom={"Тестирование"} />
    </PageContainer>
  );
}

export default About;
