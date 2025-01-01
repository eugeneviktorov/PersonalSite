import { CSSProperties } from "react";

import styles from "./TitleChapter.module.css";

export default function TitleChapter({
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
