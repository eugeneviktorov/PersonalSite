import { ReactNode } from "react";

import styles from "./PageContainer.module.css";

export default function PageContainer({
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
