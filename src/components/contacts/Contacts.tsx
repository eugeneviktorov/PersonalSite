import * as React from "react";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";
import "../about/About.css";
import "../portfolio/Portfolio.css";
import "./Contacts.css";
import GitHub from "../../assets/socialIcons/GitHub.svg";
import Figma from "../../assets/socialIcons/Figma.svg";
import TitleBlockHeader from "../portfolio/TitleBlockHeader";

const App = () => {
  const [fromName, setFromName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telNumber, setTelNumber] = React.useState("");
  const [inputErrors, setInputErrors] = React.useState({
    fromName: false,
    email: false,
    telNumber: false,
  });
  const [alertVisible, setAlertVisible] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Отправить");
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [initialValidation, setInitialValidation] = React.useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidUserName = validateUsername(fromName);
    const isValidUserEmail = validateEmail(email);
    const isValidNumber = validateNumber(telNumber);

    setInputErrors({
      fromName: !isValidUserName,
      email: !isValidUserEmail,
      telNumber: !isValidNumber,
    });

    if (isValidUserName && isValidUserEmail && isValidNumber) {
      setAlertVisible(false);
      setButtonText("Подождите");
      setButtonDisabled(true);

      try {
        const response = await emailjs.sendForm(
          "service_9ayjieh",
          "template_xiaae2e",
          e.target,
          "cbpUGnlBv2k2tjHvf"
        );
        setButtonText("Заявка принята!");
        setButtonDisabled(true);
        setFromName("");
        setEmail("");
        setTelNumber("");
      } catch (error) {
        console.error(error);
        setButtonText("Отправить");
        setButtonDisabled(false);
        alert(JSON.stringify(error));
      }
    } else {
      setAlertVisible(true);
    }
  };

  const validateUsername = (username) =>
    /^[А-ЯЁ а-яё A-Z a-z]{2,40}$/.test(username);
  const validateEmail = (mail) =>
    /^[a-zA-Zа-яА-Я0-9._-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,6}$|^[a-zA-Zа-яА-Я0-9._-]+@[a-zA-Zа-яА-Я0-9.-]+$/.test(
      mail
    );
  const validateNumber = (tel) => /^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(tel);

  return (
    <div className="App">
      <div id="feedback"></div>

      <div className="blockHeader">
        <TitleBlockHeader text={"Контакты и обратная связь"} />
        <div className="formPosition">
          <div className="backgroundForm">
            <form id="form" onSubmit={handleSubmit}>
              <input
                name="from_name"
                className={`inputFormName ${
                  inputErrors.fromName ? "isNotValid" : ""
                }`}
                placeholder="Ваше имя"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
              />
              <input
                name="email_id"
                className={`inputFormEmail ${
                  inputErrors.email ? "isNotValid" : ""
                }`}
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputMask
                type="text"
                name="tel_number"
                mask="+7 (999) 999-99-99"
                maskChar="_"
                className={`inputFormPhone ${
                  inputErrors.telNumber ? "isNotValid" : ""
                }`}
                placeholder="+7 (___) ___-__-__"
                id="tel_number"
                value={telNumber}
                onChange={(e) => setTelNumber(e.target.value)}
              />
              <div
                className={`isNotAlert ${alertVisible ? "visible" : ""}`}
                id="alert"
              >
                <span
                  className="closebtn"
                  onClick={() => setAlertVisible(false)}
                >
                  &times;
                </span>
                Некорректный ввод Имени, Почты или Номера телефона.
              </div>
              <button
                className={`button ${buttonDisabled ? "waiting" : ""} ${
                  !initialValidation ||
                  (!inputErrors.fromName &&
                    !inputErrors.email &&
                    !inputErrors.telNumber)
                    ? ""
                    : "not_allowed"
                } ${buttonText === "Заявка принята!" ? "success" : ""}`}
                id="send-button"
                type="submit"
                disabled={buttonDisabled || buttonText === "Заявка принята!"}
                onMouseEnter={() => setInitialValidation(false)}
                style={buttonDisabled ? { cursor: "not-allowed" } : {}}
              >
                {buttonText}
              </button>
              <div className="confidentiality">
                Я подтверждаю, что ознакомлен(а) с{" "}
                <a href="documents/privacy-policy.txt">
                  политикой конфиденциальности
                </a>{" "}
                и даю согласие на обработку моих персональных данных
              </div>
            </form>
          </div>
          {/* Контактные данные */}
          <div className="contacts">
            <div className="name">Викторов Евгений</div>
            <div className="linkContacts">
              <a href="tel: +7 (913) 684-55-43">+7 (913) 684-55-43</a>
              <div className="linkContacts">
                <a href="mailto:eviktorovvv@gmail.com">eviktorovvv@gmail.com</a>
              </div>
            </div>
            <a href="https://github.com/eugeneviktorov" className="icoLink">
              <div className="icoPosition">
                <img src={GitHub} className="ico" />
              </div>
            </a>
            <a href="https://www.figma.com/@eugeneviktorov" className="icoLink">
              <div className="icoPosition">
                <img src={Figma} className="ico" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
