import type { Metadata } from "next";

import { MainPortfolio } from "@/chapters/Portfolio";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import PageView from "@/components/PageView";
import PageWrapper from "@/components/PageWrapper";

import styles from "../Page.module.css";

export const metadata: Metadata = {
  title: "Портфолио",
  viewport: {
    userScalable: false,
  },
};

export default function Portfolio() {
  return (
    <PageView>
      <Loading />
      <PageWrapper headerBack>
        <div className={styles.container}>
          <MainPortfolio />
          <Footer />
        </div>
      </PageWrapper>
    </PageView>
  );
}
