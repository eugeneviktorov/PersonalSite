import * as React from "react";
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
      {/* Линк */}
      <a href="https://github.com/eugeneviktorov" className="icoLink">
        <div className="icoPosition">
          <img src={GitHub} className="ico" alt="GitHub" />
        </div>
      </a>
      {/* Линк */}
      <a href="https://www.figma.com/@eugeneviktorov" className="icoLink">
        <div className="icoPosition">
          <img src={Figma} className="ico" alt="Figma" />
        </div>
      </a>
      {/* Линк */}
      <a href="https://www.linkedin.com/in/eugeneviktorov" className="icoLink">
        <div className="icoPosition">
          <img src={Linkedin} className="ico" alt="Linkedin" />
        </div>
      </a>
    </div>
  );
};

export default App;
