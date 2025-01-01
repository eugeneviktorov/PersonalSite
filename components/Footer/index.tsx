import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Физ.лицо</span>
        <span>Викторов Евгений</span>
      </div>
      <div className={styles.title}>
        <span>+7 (913) 684-55-43</span>
        <span>eviktorovvv@gmail.com</span>
      </div>
      <div className={styles.title}>
        <Link href="/documentation/terms-of-use" className={styles.link}>
          Пользовательское соглашение
        </Link>
      </div>
      <div className={styles.title}>
        <span>viktorovvv.ru</span>
        <span>© 2023 - 2025</span>
      </div>
    </div>
  );
}
