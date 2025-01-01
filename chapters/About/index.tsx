import PageChapter from "@/components/PageChapter";

import styles from "./About.module.css";
import AboutTitle from "./components/AboutTitle";
import ExplanationTitle from "./components/ExplanationTitle";
import WorkTitle from "./components/WorkTitle";

export default function About() {
  return (
    <PageChapter>
      <div className={styles.container}>
        <AboutTitle />
        <ExplanationTitle />
        <div className={styles.workTitle}>
          <WorkTitle top="Разработка" bottom="UI - Дизайн" />
          <WorkTitle top="Поддержка" bottom="Тестирование" />
        </div>
      </div>
    </PageChapter>
  );
}
