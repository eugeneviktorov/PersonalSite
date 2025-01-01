import styles from "./WorkTitle.module.css";

export default function WorkTitle({
  top,
  bottom,
}: {
  top: string;
  bottom: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.dot} />
        <div className={styles.title}>{top}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.dot} />
        <div className={styles.title}>{bottom}</div>
      </div>
    </div>
  );
}
