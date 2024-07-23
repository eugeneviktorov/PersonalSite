"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useIsMobileQuery } from "@/hooks/useIsMobileQuery";
import Logotype from "@/public/assets/icons/Logotype.svg";
import Menu from "@/public/assets/icons/Menu.svg";

import ButtonNavigate from "./components/ButtonNavigate";
import MenuRight from "./components/MenuRight";
import styles from "./Header.module.css";

export default function Header({
  main,
  back,
}: {
  main?: boolean;
  back?: boolean;
}) {
  const router = useRouter();
  const isMobileQuery = useIsMobileQuery();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

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
            className={styles.icon}
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
