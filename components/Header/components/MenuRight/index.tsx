import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

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
  return (
    <div className={isOpen ? styles.containerOpen : styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <Image src={Logotype} alt="Logotype" className={styles.logotype} />
        </Link>
        <Image
          src={Close}
          alt="Close"
          className={styles.icon}
          onClick={onClose}
        />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
