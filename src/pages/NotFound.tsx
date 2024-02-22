import * as React from "react";
import AppPageView from "../components/AppPageView";
import Preload from "../components/preload/Preload";
import ErrorPage from "../components/error/ErrorPage";
import Footer from "../components/footer/Footer";

function NotFound() {
  document.title = "404";
  return (
    <AppPageView>
      <Preload />
      <ErrorPage />
      <Footer />
    </AppPageView>
  );
}

export default NotFound;
