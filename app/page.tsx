import type { Metadata , Viewport } from "next";

import About from "@/chapters/About";
import Contacts from "@/chapters/Contacts";
import { InitialPortfolio } from "@/chapters/Portfolio";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading/loading";
import PageView from "@/components/PageView";

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
      <Header main />
      <About />
      <InitialPortfolio />
      <Contacts />
      <Footer />
    </PageView>
  );
}
