import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Logotype from "@/components/Logotype";
import PageView from "@/components/PageView";

import styles from "./NotFound.module.css";

export const metadata: Metadata = {
  title: "404",
  viewport: {
    userScalable: false,
  },
};

export default function Custom404() {
  return (
    <PageView>
      <Loading />
      <div className={styles.container}>
        <div className={styles.errorContainer}>
          <div className={styles.title}>
            Страница
            <br />
            не найдена
          </div>
          <div className={styles.code}>404</div>
          <Logotype className={styles.logotype} />
          <Link href="/" className={styles.button}>
            На главную
          </Link>
        </div>
        <Footer />
      </div>
    </PageView>
  );
}
