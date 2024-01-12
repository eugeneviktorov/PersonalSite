import * as React from "react";
import "../about/About.css";
import "../portfolio/Portfolio.css";
import "./Contacts.css";
import TitleBlockHeader from "../portfolio/TitleBlockHeader";
import ContactsData from "./ContactsData";
import FeedbackForm from "./FeedbackForm";

const App = () => {
  return (
    <div className="App">
      <div id="feedback"></div>
      <div className="blockHeader">
        <TitleBlockHeader text={"Контакты и обратная связь"} />
        {/* Форма обратной связи */}
        <div className="formPosition">
          <div className="backgroundForm">
            <FeedbackForm
              serviceId={"service_9ayjieh"}
              templateId={"template_xiaae2e"}
              userId={"cbpUGnlBv2k2tjHvf"}
            />
          </div>
          {/* Контактные данные */}
          <div className="contacts">
            <ContactsData
              fullName={"Викторов Евгений"}
              number={"+7 (913) 684-55-43"}
              email={"eviktorovvv@gmail.com"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
