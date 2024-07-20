import Link from "next/link";
import styles from "./Portfolio.module.css";
import PageContainer from "@/components/PageContainer";
import TitleSection from "@/components/TitleSection";
import PortfolioItem from "./components/PortfolioItem";
import { PortfolioItemType } from "./PortfolioItem.types";

export function InitialPortfolio() {
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
  const portfolioItem: PortfolioItemType[] = require("@/public/assets/dataJson/Portfolio.json");
  return (
    <PageContainer section="portfolio">
      <TitleSection text="Портфолио" />
      {portfolioItem.map((item, index) => (
        <PortfolioItem key={index} item={item} />
      ))}
    </PageContainer>
  );
}
