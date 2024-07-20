import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect } from "react";

import Close from "@/public/assets/icons/Close.svg";
import Logotype from "@/public/assets/icons/Logotype.svg";

import styles from "./MenuRight.module.css";

export default function MenuRight({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={styles.test}>
      <div className={isOpen ? styles.overlay : styles.overlay} />
      <div className={isOpen ? styles.containerOpen : styles.container}>
        <div className={styles.header}>
          <Link href="/">
            <Image src={Logotype} alt="Logotype" className={styles.logotype} />
          </Link>
          <Image
            src={Close}
            alt="Close"
            className={styles.iconButton}
            onClick={onClose}
          />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
