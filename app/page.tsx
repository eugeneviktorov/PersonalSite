import type { Metadata } from "next";
import PageView from "@/components/PageView";
import Loading from "@/components/Loading/loading";
import Header from "@/components/Header";
import About from "@/components/About";
import { InitialPortfolio } from "@/components/Portfolio";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Викторов",
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
