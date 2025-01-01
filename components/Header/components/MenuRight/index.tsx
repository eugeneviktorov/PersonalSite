import Image from "next/image";
import { ReactNode } from "react";

import Logotype from "@/components/Logotype";
import Close from "@/public/assets/images/Close.svg";

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
        <Logotype />
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
