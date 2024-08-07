import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import TitleSection from "@/components/TitleSection";

import PortfolioItem from "./components/PortfolioItem";
import styles from "./Portfolio.module.css";
import { PortfolioItemType } from "./PortfolioItem.types";

export function InitialPortfolio() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const portfolioItem: PortfolioItemType[] = require("@/public/assets/dataJson/Portfolio.json");
  const portfolioFiltered = portfolioItem.filter((item) => item.favorite);
  return (
    <PageContainer section="portfolio">
      <TitleSection text="Портфолио" />
      {portfolioFiltered.map((item, index) => (
        <PortfolioItem key={index} item={item} />
      ))}
      <Link href="/portfolio" className={styles.button}>
        Все работы
      </Link>
    </PageContainer>
  );
}

export function MainPortfolio() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const portfolioItem: PortfolioItemType[] = require("@/public/assets/dataJson/Portfolio.json");
  return (
    <PageContainer section="portfolio">
      <TitleSection text="Портфолио" style={{ marginTop: "1em" }} />
      {portfolioItem.map((item, index) => (
        <PortfolioItem key={index} item={item} />
      ))}
    </PageContainer>
  );
}
