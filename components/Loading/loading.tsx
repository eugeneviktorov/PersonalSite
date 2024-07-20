"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import Logo from "@/public/assets/icons/Icon.svg";

import styles from "./Loading.module.css";

export default function Loading() {
  const [loading, setLoading] = useState(false);

  // Таймер на показ лого после полной загрузки страницы
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    };

    // Состояние загрузки страницы
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  });

  return (
    <div
      className={`${styles.container} ${
        loading ? styles.invisible : styles.none
      }`}
    >
      <Image src={Logo} alt="Logo" className={styles.logo} />
    </div>
  );
}
