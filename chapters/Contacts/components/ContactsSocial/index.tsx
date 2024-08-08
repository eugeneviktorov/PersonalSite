import Image from "next/image";
import Link from "next/link";

import styles from "./ContactSocial.module.css";

export default function ContactsSocial({
  link,
  icon,
  alt,
}: {
  link: string;
  icon: string;
  alt: string;
}) {
  return (
    <Link href={link} className={styles.container}>
      <Image src={icon} alt={alt} className={styles.icon} draggable={false} />
    </Link>
  );
}
