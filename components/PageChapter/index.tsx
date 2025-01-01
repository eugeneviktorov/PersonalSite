import { ReactNode } from "react";

import styles from "./PageChapter.module.css";

export default function PageChapter({
  section,
  children,
}: {
  section?: string;
  children: ReactNode;
}) {
  return (
    <div id={section} className={styles.container}>
      {children}
    </div>
  );
}
