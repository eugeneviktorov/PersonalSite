import type { Metadata } from "next";
import type { Viewport } from "next";
import PageView from "@/components/PageView";
import Loading from "@/components/Loading/loading";
import ErrorContainer from "@/components/ErrorContainer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "404",
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function Custom404() {
  return (
    <PageView>
      <Loading />
      <ErrorContainer />
      <Footer />
    </PageView>
  );
}
