import { ReactNode } from "react";

import styles from "./PageWrapper.module.css";
import Header from "../Header";

export default function PageWrapper({
  headerMain,
  headerBack,
  children,
}: {
  headerMain?: boolean;
  headerBack?: boolean;
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className={styles.container}>
      <Header main={headerMain} back={headerBack} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
