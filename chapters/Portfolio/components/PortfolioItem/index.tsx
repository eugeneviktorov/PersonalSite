import Image from "next/image";

import styles from "./PortfolioItem.module.css";
import { IPortfolioItem } from "../../PortfolioItem.types";

export default function PortfolioItem({ item }: { item: IPortfolioItem }) {
  return (
    <div className={styles.container}>
      <a href={item.link} className={styles.imageContainer}>
        <Image
          src={`/assets/portfolio/images/${item.image}`}
          alt={item.title}
          className={styles.image}
          draggable={false}
          width={1920}
          height={1080}
        />
        {item.working && (
          <div className={styles.working}>
            <div className={styles.workingTitle}>
              НЕДОСТУПНО В ДАННЫЙ МОМЕНТ
            </div>
          </div>
        )}
      </a>
      <a href={item.link} className={styles.title}>
        {item.title}
      </a>
      <div className={styles.description}>{item.description}</div>
    </div>
  );
}
