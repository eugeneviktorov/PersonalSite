import Link from "next/link";
import Image from "next/image";
import styles from "./ContactSocial.module.css";

export default function ContactsSocial({
  link,
  icon,
}: {
  link: string;
  icon: string;
}) {
  return (
    <div className={styles.container}>
      <Link href={link}>
        <Image src={icon} alt="Logotype" className={styles.icon} />
      </Link>
    </div>
  );
}
