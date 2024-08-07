import type { Metadata, Viewport } from "next";

import About from "@/chapters/About";
import Contacts from "@/chapters/Contacts";
import { InitialPortfolio } from "@/chapters/Portfolio";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading/loading";
import PageView from "@/components/PageView";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Викторов",
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function Page() {
  return (
    <PageView>
      <Loading />
      <PageWrapper headerMain>
        <About />
        <InitialPortfolio />
        <Contacts />
        <Footer />
      </PageWrapper>
    </PageView>
  );
}
