import type { Metadata } from "next";
import PageView from "@/components/PageView";
import Loading from "@/components/Loading/loading";
import Header from "@/components/Header";
import { MainPortfolio } from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Портфолио",
};

export default function Portfolio() {
  return (
    <PageView>
      <Loading />
      <Header back />
      <MainPortfolio />
      <Footer />
    </PageView>
  );
}
