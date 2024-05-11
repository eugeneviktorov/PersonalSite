import Link from "next/link";
import Image from "next/image";
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
    <div className={styles.container}>
      <Link href={link}>
        <Image src={icon} alt={alt} className={styles.icon} draggable={false} />
      </Link>
    </div>
  );
}
