import { ReactNode } from "react";

import styles from "./PageView.module.css";

export default function PageView({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
