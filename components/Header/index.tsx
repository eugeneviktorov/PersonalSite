"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useIsMobileQuery } from "@/hooks/useIsMobileQuery";
import Menu from "@/public/assets/images/Menu.svg";

import ButtonNavigate from "./components/ButtonNavigate";
import MenuRight from "./components/MenuRight";
import styles from "./Header.module.css";
import Logotype from "../Logotype";

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
        <Logotype />
        {main && (
          <Image
            src={Menu}
            alt="Menu"
            className={styles.icon}
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
        {back && (
          <div className={styles.buttonNavigateContainer}>
            <ButtonNavigate title="Назад" onClick={router.back} />
          </div>
        )}
        {!main && !back && (
          <div className={styles.buttonNavigateContainer}>
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
      <Logotype />
      {main && (
        <div className={styles.buttonNavigateContainer}>
          <ButtonNavigate title="работы" link="#portfolio" />
          <ButtonNavigate title="контакты" link="#contacts" />
        </div>
      )}
      {back && (
        <div className={styles.buttonNavigateContainer}>
          <ButtonNavigate title="Назад" onClick={router.back} />
        </div>
      )}
      {!main && !back && (
        <div className={styles.buttonNavigateContainer}>
          <ButtonNavigate title="главная" link="/" />
        </div>
      )}
    </div>
  );
}
