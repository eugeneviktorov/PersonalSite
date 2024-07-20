import type { Metadata } from "next";
import type { Viewport } from "next";
import PageView from "@/components/PageView";
import Loading from "@/components/Loading/loading";
import Header from "@/components/Header";
import About from "@/chapters/About";
import { InitialPortfolio } from "@/chapters/Portfolio";
import Contacts from "@/chapters/Contacts";
import Footer from "@/components/Footer";

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
