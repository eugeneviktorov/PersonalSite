import * as React from "react";
import ContactsLink from "./ContactsLink";
import GitHub from "../../assets/icons/GitHub.svg";
import Figma from "../../assets/icons/Figma.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";

const App = ({
  fullName,
  number,
  email,
}: {
  fullName: string;
  number: string;
  email: string;
}) => {
  return (
    <div>
      {/* Персональные данные */}
      <div className="name">{fullName}</div>
      <div className="linkContacts">
        <a href={`tel: ${number}`}>{number}</a>
        <div className="linkContacts">
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      {/* Контактные ссылки */}
      <div className="icoLinkPosition">
        <ContactsLink
          link={"https://github.com/eugeneviktorov"}
          icon={GitHub}
          alt={"GitHub"}
        />
        <ContactsLink
          link={"https://www.figma.com/@eugeneviktorov"}
          icon={Figma}
          alt={"Figma"}
        />
        <ContactsLink
          link={"https://www.linkedin.com/in/eugeneviktorov"}
          icon={Linkedin}
          alt={"Linkedin"}
        />
      </div>
    </div>
  );
};

export default App;
