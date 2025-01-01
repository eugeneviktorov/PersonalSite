import type { Metadata } from "next";

import About from "@/chapters/About";
import Contacts from "@/chapters/Contacts";
import { InitialPortfolio } from "@/chapters/Portfolio";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import PageView from "@/components/PageView";
import PageWrapper from "@/components/PageWrapper";

import styles from "./Page.module.css";

export const metadata: Metadata = {
  title: "Викторов",
  viewport: {
    userScalable: false,
  },
};

export default function Page() {
  return (
    <PageView>
      <Loading />
      <PageWrapper headerMain>
        <div className={styles.container}>
          <About />
          <InitialPortfolio />
          <Contacts />
          <Footer />
        </div>
      </PageWrapper>
    </PageView>
  );
}
