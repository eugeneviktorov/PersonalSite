import * as React from "react";
import "./Portfolio.css";
import "../about/About.css";
import ITAdaptation from "../../assets/image/IT-Adaptation.png";
import IPViktorova from "../../assets/image/IP-Viktorova.png";
import YandexPharmaDay from "../../assets/image/YandexPharmaDay.png";
import NetworkProfile from "../../assets/image/Network-Profile.png";
import MusicService from "../../assets/image/Music-service.png";
import HackathonSchool from "../../assets/image/Hackathon-School.png";
import DribbbleConcept from "../../assets/image/Dribbble-concept.png";
import NLogo from "../../assets/image/N-Logo.png";
import SRSHBBot from "../../assets/image/SRSHB_bot.png";
import ShortStory from "../../assets/image/ShortStory.png";
import DirectDost from "../../assets/image/DirectDost.png";

function App() {
  React.useEffect(() => {
    // При монтировании компонента (после перехода) прокрутить вверх
    window.scrollTo(0, 0);
  }, []);

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
            <a href="https://it-adapt.ru">ИТ Адаптация</a>
          </div>
          <div className="portfolioTextAbout">Лендинг ИТ компании</div>
        </div>

        {/* ИП Викторова */}
        <div className="portfolioPhoto">
          <a href="./projects/IP-Viktorova/index.html">
            <div className="hideImage">
              <img src={IPViktorova} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="./projects/IP-Viktorova/index.html">ИП Викторова</a>
          </div>
          <div className="portfolioTextAbout">
            Лендинг ИП, бухгалтерских услуг
          </div>
        </div>

        {/* YandexPharmaDay */}
        <div className="portfolioPhoto">
          <a href="./projects/YandexPharmaDay/index.html">
            <div className="hideImage">
              <img src={YandexPharmaDay} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="./projects/YandexPharmaDay/index.html">YandexPharmaDay</a>
          </div>
          <div className="portfolioTextAbout">Лендинг дня фармацевтики</div>
        </div>

        {/* Network Profile */}
        <div className="portfolioPhoto">
          <a href="./projects/Network-Profile/index.html">
            <div className="hideImage">
              <img src={NetworkProfile} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="./projects/Network-Profile/index.html">Network Profile</a>
          </div>
          <div className="portfolioTextAbout">
            Лендинг профиля социальной сети
          </div>
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

        {/* Hackathon School */}
        <div className="portfolioPhoto">
          <a href="https://www.figma.com/community/file/1166069552938719525">
            <div className="hideImage">
              <img src={HackathonSchool} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="https://www.figma.com/community/file/1166069552938719525">
              Hackathon School
            </a>
          </div>
          <div className="portfolioTextAbout">Макет сайта, справочник</div>
        </div>

        {/* Dribbble-concept */}
        <div className="portfolioPhoto">
          <a href="./projects/Dribbble-concept/index.html">
            <div className="hideImage">
              <img src={DribbbleConcept} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="./projects/Dribbble-concept/index.html">
              Dribbble-concept
            </a>
          </div>
          <div className="portfolioTextAbout">Архив шотов с Dribbble</div>
        </div>

        {/* N-Logo */}
        <div className="portfolioPhoto">
          <a href="https://www.figma.com/community/file/1154827765025781172/n-logo">
            <div className="hideImage">
              <img src={NLogo} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="https://www.figma.com/community/file/1154827765025781172/n-logo">
              N-Logo
            </a>
          </div>
          <div className="portfolioTextAbout">Логитип буквы N</div>
        </div>

        {/* СРШБ бот */}
        <div className="portfolioPhoto">
          <a href="https://t.me/srshb_bot">
            <div className="hideImage">
              <img src={SRSHBBot} className="portfolioPhotoSettings" />
            </div>
          </a>
          <div className="portfolioTitleName">
            <a href="https://t.me/srshb_bot">СРШБ бот</a>
          </div>
          <div className="portfolioTextAbout">Telegram bot для колледжа</div>
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
      </div>
    </div>
  );
}

export default App;
