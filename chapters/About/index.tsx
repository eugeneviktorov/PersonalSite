import AboutTitle from "./components/AboutTitle";
import Explanation from "./components/Explanation";
import WorkTitle from "./components/WorkTitle";
import PageContainer from "../../components/PageContainer";

export default function About() {
  return (
    <PageContainer>
      <AboutTitle />
      <Explanation />
      <WorkTitle titleTop="Разработка" titleBottom="UI - Дизайн" />
      <WorkTitle titleTop="Поддержка" titleBottom="Тестирование" />
    </PageContainer>
  );
}
