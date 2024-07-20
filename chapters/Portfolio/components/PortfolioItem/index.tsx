import Image from "next/image";
import styles from "./PortfolioItem.module.css";
import { PortfolioItemType } from "../../PortfolioItem.types";

export default function PortfolioItem({ item }: { item: PortfolioItemType }) {
  return (
    <div className={styles.container}>
      <a href={item.link} className={styles.hideImage}>
        <Image
          src={`/assets/images/${item.image}`}
          alt={item.title}
          className={styles.image}
          draggable={false}
          width="1920"
          height="1080"
        />
        {item.notWorking && (
          <div className={styles.notWorking}>
            <div className={styles.notWorkingTitle}>
              НЕДОСТУПНО В ДАННЫЙ МОМЕНТ
            </div>
          </div>
        )}
      </a>
      <div className={styles.nameContainer}>
        <a href={item.link}>{item.title}</a>
      </div>
      <div className={styles.aboutTitle}>{item.description}</div>
    </div>
  );
}
