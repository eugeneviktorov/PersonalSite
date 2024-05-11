import type { Metadata } from "next";
import type { Viewport } from "next";
import PageView from "@/components/PageView";
import ErrorElement from "@/components/ErrorElement";
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
      <ErrorElement />
      <Footer />
    </PageView>
  );
}
