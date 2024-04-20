import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
          Физ.лицо
          <br />
          Викторов Евгений
        </p>
      </div>
      <div className={styles.title}>
        <p>+7 (913) 684-55-43</p>
        <p>eviktorovvv@gmail.com</p>
      </div>
      <div className={styles.title}>
        <Link href="/documentation/terms-of-use">
          <p>Пользовательское соглашение</p>
        </Link>
      </div>
      <div className={styles.title}>
        <p>
          viktorovvv.ru
          <br />© 2023 - 2024
        </p>
      </div>
    </div>
  );
}
