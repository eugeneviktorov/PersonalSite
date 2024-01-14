import * as React from "react";
import GitHub from "../../assets/socialIcons/GitHub.svg";
import Figma from "../../assets/socialIcons/Figma.svg";
import Linkedin from "../../assets/socialIcons/Linkedin.svg";

const App = ({ fullName, number, email }) => {
  return (
    <div className="App">
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
          <img src={GitHub} className="ico" />
        </div>
      </a>
      {/* Линк */}
      <a href="https://www.figma.com/@eugeneviktorov" className="icoLink">
        <div className="icoPosition">
          <img src={Figma} className="ico" />
        </div>
      </a>
      {/* Линк */}
      <a href="https://www.linkedin.com/in/eugeneviktorov" className="icoLink">
        <div className="icoPosition">
          <img src={Linkedin} className="ico" />
        </div>
      </a>
    </div>
  );
};

export default App;
