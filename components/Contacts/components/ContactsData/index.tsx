import Link from "next/link";
import styles from "./ContactsData.module.css";
import ContactsSocial from "../ContactsSocial";
import GitHub from "@/public/assets/icons/GitHub.svg";
import Figma from "@/public/assets/icons/Figma.svg";
import Linkedin from "@/public/assets/icons/Linkedin.svg";

export default function ContactsData({
  name,
  number,
  email,
}: {
  name: string;
  number: string;
  email: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.contactsContainer}>
        <Link href={`tel: ${number}`}>{number}</Link>
      </div>
      <div className={styles.contactsContainer}>
        <Link href={`mailto:${email}`}>{email}</Link>
      </div>
      <div className={styles.contactsSocialContainer}>
        <ContactsSocial
          link="https://github.com/eugeneviktorov"
          icon={GitHub}
        />
        <ContactsSocial
          link="https://www.figma.com/@eugeneviktorov"
          icon={Figma}
        />
        <ContactsSocial
          link="https://www.linkedin.com/in/eugeneviktorov"
          icon={Linkedin}
        />
      </div>
    </div>
  );
}
