"use client";
import Link from "next/link";
import { MouseEventHandler } from "react";

import styles from "./ButtonNavigate.module.css";

export default function ButtonNavigate({
  title,
  link,
  onClick,
}: {
  title: string;
  link?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return onClick ? (
    <div onClick={onClick} className={styles.button}>
      {title}
    </div>
  ) : (
    <Link href={link as string} className={styles.button} onClick={onClick}>
      {title}
    </Link>
  );
}
