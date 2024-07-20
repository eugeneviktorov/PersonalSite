"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import Logotype from "@/public/assets/icons/Logotype.svg";
import Menu from "@/public/assets/icons/Menu.svg";
import { useState } from "react";
import MenuRight from "./components/MenuRight";
import { useIsMobileQuery } from "@/hooks/useIsMobileQuery";
import ButtonNavigate from "./components/ButtonNavigate";

export default function Header({
  main,
  back,
}: {
  main?: boolean;
  back?: boolean;
}) {
  const router = useRouter();
  const isMobile = useIsMobileQuery();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return isMobile ? (
    <>
      <div className={styles.container}>
        <Link href="/">
          <Image src={Logotype} alt="Logotype" className={styles.logotype} />
        </Link>
        {main && (
          <Image
            src={Menu}
            alt="Menu"
            className={styles.iconButton}
            onClick={() => setMobileMenuOpen(true)}
          />
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
      <MenuRight
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Link
          href="#portfolio"
          className={styles.link}
          onClick={() => setMobileMenuOpen(false)}
        >
          работы
        </Link>
        <Link
          href="#contacts"
          className={styles.link}
          onClick={() => setMobileMenuOpen(false)}
        >
          контакты
        </Link>
      </MenuRight>
    </>
  ) : (
    <div className={styles.container}>
      <Link href="/" className={styles.logotypeContainer}>
        <Image src={Logotype} alt="Logotype" className={styles.logotype} />
      </Link>
      {main && (
        <div>
          <ButtonNavigate title="работы" link="#portfolio" />
          <ButtonNavigate title="контакты" link="#contacts" />
        </div>
      )}
      {back && <ButtonNavigate title="Назад" onClick={router.back} />}
      {!main && !back && <ButtonNavigate title="главная" link="/" />}
    </div>
  );
}
