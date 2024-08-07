import type { Metadata, Viewport } from "next";

import { MainPortfolio } from "@/chapters/Portfolio";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading/loading";
import PageView from "@/components/PageView";
import PageWrapper from "@/components/PageWrapper";

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
      <PageWrapper headerBack>
        <MainPortfolio />
        <Footer />
      </PageWrapper>
    </PageView>
  );
}
