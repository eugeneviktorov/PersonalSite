import styles from "./TitleSection.module.css";

export default function TitleSection({ text }: { text: string }) {
  return <div className={styles.container}>{text}</div>;
}
