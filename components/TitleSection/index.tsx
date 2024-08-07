import { CSSProperties } from "react";

import styles from "./TitleSection.module.css";

export default function TitleSection({
  text,
  style,
}: {
  text: string;
  style?: CSSProperties;
}) {
  return (
    <div className={styles.container} style={style}>
      {text}
    </div>
  );
}
