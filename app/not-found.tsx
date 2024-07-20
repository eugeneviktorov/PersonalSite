import type { Metadata , Viewport } from "next";

import ErrorContainer from "@/components/ErrorContainer";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading/loading";
import PageView from "@/components/PageView";

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
