import * as React from "react";
import "./Portfolio.css";
import "../about/About.css";
import ITAdaptation from "../../assets/image/IT-Adaptation.png";
import MusicService from "../../assets/image/Music-service.png";
import ShortStory from "../../assets/image/ShortStory.png";
import DirectDost from "../../assets/image/DirectDost.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="portfolio"></div>
      <div className="blockHeader">
        <div className="titleBlockHeader">Портфолио</div>

        {/* ИТ Адаптация */}
        <div className="portfolioPhoto">
          <a href="https://it-adapt.ru">
            <div className="hideImage">
              <img src={ITAdaptation} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="https://it-adapt.ru/">ИТ Адаптация</a>
          </div>
          <div className="portfolioTextAbout">Лендинг ИТ компании</div>
        </div>

        {/* Music service */}
        <div className="portfolioPhoto">
          <a href="https://www.figma.com/community/file/1113393200185818580/Music-service">
            <div className="hideImage">
              <img src={MusicService} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="https://www.figma.com/community/file/1113393200185818580/Music-service">
              Music service
            </a>
          </div>
          <div className="portfolioTextAbout">Макет мобильного приложения</div>
        </div>

        {/* ShortStory */}
        <div className="portfolioPhoto">
          <a href="https://t.me/ShortStoryyBot">
            <div className="hideImage">
              <img src={ShortStory} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="https://t.me/ShortStoryyBot">ShortStory bot</a>
          </div>
          <div className="portfolioTextAbout">
            Telegram bot коротких историй
          </div>
        </div>

        {/* DirectDost */}
        <div className="portfolioPhoto">
          <a href="https://github.com/eugeneviktorov/DirectDost">
            <div className="hideImage">
              <img src={DirectDost} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="https://github.com/eugeneviktorov/DirectDost">
              DirectDost (концепт)
            </a>
          </div>
          <div className="portfolioTextAbout">Приложение для университета</div>
        </div>

        {/* Все работы */}
        <Link to="/portfolio">
          <div className="buttonCases">Все работы</div>
        </Link>
      </div>
    </div>
  );
}

export default App;
