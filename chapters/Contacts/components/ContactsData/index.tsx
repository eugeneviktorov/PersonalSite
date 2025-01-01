import Link from "next/link";
import { ReactNode } from "react";

import styles from "./ContactsData.module.css";

export default function ContactsData({
  name,
  number,
  email,
  children,
}: {
  name: string;
  number: string;
  email: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.contact}>
        <Link href={`tel: ${number}`}>{number}</Link>
      </div>
      <div className={styles.contact}>
        <Link href={`mailto:${email}`}>{email}</Link>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
