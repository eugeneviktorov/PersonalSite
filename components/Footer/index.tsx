import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Физ.лицо
        <br />
        Викторов Евгений
      </div>
      <div className={styles.title}>
        <span>+7 (913) 684-55-43</span>
        <br />
        <span>eviktorovvv@gmail.com</span>
      </div>
      <div className={styles.title}>
        <Link href="/documentation/terms-of-use">
          Пользовательское соглашение
        </Link>
      </div>
      <div className={styles.title}>
        viktorovvv.ru
        <br />© 2023 - 2024
      </div>
    </div>
  );
}
