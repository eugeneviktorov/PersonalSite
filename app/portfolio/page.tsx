import type { Metadata , Viewport } from "next";

import { MainPortfolio } from "@/chapters/Portfolio";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading/loading";
import PageView from "@/components/PageView";

export const metadata: Metadata = {
  title: "Портфолио",
};

export const viewport: Viewport = {
  userScalable: false,
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
