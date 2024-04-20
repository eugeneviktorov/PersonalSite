import Link from "next/link";
import Image from "next/image";
import styles from "./ErrorElement.module.css";
import Logotype from "@/public/assets/icons/Logotype-site.svg";

export default function ErrorElement() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Страница
        <br />
        не найдена
      </div>
      <div className={styles.errorCode}>404</div>
      <Image
        src={Logotype}
        alt="Logotype"
        className={styles.logotype}
        width={100}
        height={100}
      />
      <div className={styles.buttonContainer}>
        <Link href="/" className={styles.button}>
          На главную
        </Link>
      </div>
    </div>
  );
}
