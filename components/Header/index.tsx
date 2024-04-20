"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Logotype from "@/public/assets/icons/Logotype-site.svg";
import ButtonNavigate from "./components/ButtonNavigate";

export default function Header({
  main,
  back,
}: {
  main?: boolean;
  back?: boolean;
}) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logotypeContainer}>
        <Image src={Logotype} alt="Logotype" className={styles.logotype} />
      </Link>
      {main && (
        <div className={styles.buttonContainer}>
          <ButtonNavigate title="работы" link="#portfolio" />
          <ButtonNavigate title="контакты" link="#contacts" />
        </div>
      )}
      {back && (
        <div className={styles.buttonContainer}>
          <ButtonNavigate title="Назад" onClick={router.back} />
        </div>
      )}
      {!main && !back && (
        <div className={styles.buttonContainer}>
          <ButtonNavigate title="главная" link="/" />
        </div>
      )}
    </div>
  );
}
