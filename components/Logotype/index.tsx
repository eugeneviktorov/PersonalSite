import Image from "next/image";
import Link from "next/link";

import LogotypeImage from "@/public/assets/images/Logotype.svg";

import styles from "./Logotype.module.css";

export default function Logotype({ className }: { className?: string }) {
  return (
    <Link href="/" className={styles.container}>
      <Image
        src={LogotypeImage}
        alt="Logotype"
        className={className || styles.logotype}
      />
    </Link>
  );
}
