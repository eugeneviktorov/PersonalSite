import * as React from "react";
import "./Portfolio.css";

const PortfolioItem = ({ item }: { item: any }) => (
  <div className="portfolioPhoto">
    <a href={item.link}>
      <div className="hideImage">
        <img
          src={require(`../../assets/image/${item.image}`)}
          className="portfolioPhotoSettings"
          alt={item.title}
        />
      </div>
    </a>
    <div className="portfolioTitleName">
      <a href={item.link}>{item.title}</a>
    </div>
    <div className="portfolioTextAbout">{item.description}</div>
  </div>
);

export default PortfolioItem;
