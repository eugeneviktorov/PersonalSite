import * as React from "react";
import "./Portfolio.css";

const PortfolioItem = ({ item }: { item: any }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="portfolioPhoto">
      <a href={item.link}>
        <div className="hideImage">
          <div className={`loadingImage ${imageLoaded ? "hidden" : ""}`}></div>
          <img
            src={require(`../../assets/image/${item.image}`)}
            className={`portfolioPhotoSettings ${
              imageLoaded ? "visible" : "hidden"
            }`}
            alt={item.title}
            onLoad={handleImageLoad}
          />
        </div>
      </a>

      <div className="portfolioTitleName">
        <a href={item.link}>{item.title}</a>
      </div>
      <div className="portfolioTextAbout">{item.description}</div>
    </div>
  );
};

export default PortfolioItem;
