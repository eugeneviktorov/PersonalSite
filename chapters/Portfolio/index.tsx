import Link from "next/link";

import PageChapter from "@/components/PageChapter";
import TitleChapter from "@/components/TitleChapter";
import portfolioData from "@/public/assets/portfolio/data/portfolio.json";

import PortfolioItem from "./components/PortfolioItem";
import styles from "./Portfolio.module.css";
import { IPortfolioItem } from "./PortfolioItem.types";

export function InitialPortfolio() {
  const portfolioItem: IPortfolioItem[] = portfolioData;
  const portfolioFiltered = portfolioItem.filter((item) => item.favorite);

  return (
    <PageChapter section="portfolio">
      <div className={styles.container}>
        <TitleChapter text="Портфолио" />
        <div className={styles.content}>
          {portfolioFiltered.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
        </div>
        <Link href="/portfolio" className={styles.button}>
          Все работы
        </Link>
      </div>
    </PageChapter>
  );
}

export function MainPortfolio() {
  const portfolioItem: IPortfolioItem[] = portfolioData;

  return (
    <PageChapter section="portfolio">
      <div className={styles.container}>
        <TitleChapter text="Портфолио" />
        <div className={styles.content}>
          {portfolioItem.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
        </div>
      </div>
    </PageChapter>
  );
}
