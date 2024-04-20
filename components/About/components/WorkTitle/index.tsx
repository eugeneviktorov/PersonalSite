import styles from "./WorkTitle.module.css";

export default function WorkTitle({
  titleTop,
  titleBottom,
}: {
  titleTop: string;
  titleBottom: string;
}) {
  return (
    <div className={styles.container}>
      <ul>
        <li>{titleTop}</li>
      </ul>
      <ul>
        <li>{titleBottom}</li>
      </ul>
    </div>
  );
}
