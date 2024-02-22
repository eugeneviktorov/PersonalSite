import * as React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Input from "./Input";
import LinkTitle from "../../LinkTitle";
import { GlobalColors, GlobalShadows } from "../../ColorTheme";

const FeedbackForm = ({
  serviceId,
  templateId,
  userId,
}: {
  serviceId: string;
  templateId: string;
  userId: string;
}) => {
  // Формировочные данные
  const [fromName, setFromName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telNumber, setTelNumber] = React.useState("");

  // Валидационные состояния
  const [isValidUserName, setIsValidName] = React.useState(false);
  const [isValidUserEmail, setIsValidEmail] = React.useState(false);
  const [isValidNumber, setIsValidTelNumber] = React.useState(false);

  // Уведомление
  const [alertVisible, setAlertVisible] = React.useState(false);

  // Измененение состояние кнопки
  const [buttonText, setButtonText] = React.useState("Отправить");
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [initialValidation, setInitialValidation] = React.useState(true);

  // Визуальная обработка ошибки данных
  const [inputErrors, setInputErrors] = React.useState({
    fromName: false,
    email: false,
    telNumber: false,
  });

  // Обработка отправки данных
  const handleSubmit = async (e) => {
    // Визуальная обработка ошибки данных
    setInputErrors({
      fromName: !isValidUserName,
      email: !isValidUserEmail,
      telNumber: !isValidNumber,
    });

    e.preventDefault();
    if (isValidUserName && isValidUserEmail && isValidNumber) {
      // Обновление текста во время отправки данных
      setButtonText("Ожидайте");
      setButtonDisabled(true);
      try {
        // Получение данных для отправки данных по аккаунту
        await emailjs.sendForm(serviceId, templateId, e.target, userId);

        // Обновление текста и блокировка кнопки
        setButtonText("Заявка принята!");
        setButtonDisabled(true);

        // Очистка полей ввода после отправки
        setFromName("");
        setEmail("");
        setTelNumber("");
        setAlertVisible(false);
      } catch (error) {
        console.error(error);
        setButtonText("Отправить");
        setButtonDisabled(false);
        alert(
          "Произошла ошибка отправки данных\nОбратитесь к администратору\n\nОшибка:\n" +
            JSON.stringify(error)
        );
      }
    } else {
      // Показ уведомления при ошибке
      setAlertVisible(true);
    }
  };

  // Определения имени
  const handleFromNameChange = (e) => {
    const inputValue = e.target.value;
    setFromName(inputValue);
    setIsValidName(validateUsername(inputValue));
  };

  // Определения эл.почты
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  // Определения номера телефона
  const handleTelNumberChange = (e) => {
    const inputValue = e.target.value;
    setTelNumber(inputValue);
    setIsValidTelNumber(validateNumber(inputValue));
  };

  // Формулы валидации данных
  const validateUsername = (username) =>
    /^[А-ЯЁ а-яё A-Z a-z]{2,40}$/.test(username);
  const validateEmail = (mail) =>
    /^[a-zA-Zа-яА-Я0-9._-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,6}$|^[a-zA-Zа-яА-Я0-9._-]+@[a-zA-Zа-яА-Я0-9.-]+$/.test(
      mail
    ) && mail.length <= 70;
  const validateNumber = (tel) => /^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(tel);

  // Перемещение курсора в начало ввода номера телефона
  const handleMouseDown = (e) => {
    e.preventDefault();
    // Активация поля ввода
    if (!document.activeElement.isSameNode(e.target)) {
      e.target.focus();
    }
  };

  return (
    <Container>
      <form id="form" onSubmit={handleSubmit}>
        {/* Поле ввода имени */}
        <Input
          inputmode={"text"}
          named={"from_name"}
          className={`${inputErrors.fromName ? "isNotValid" : "none"}`}
          placeholder={"Ваше имя"}
          value={fromName}
          onChange={handleFromNameChange}
        />
        {/* Поле ввода эл.почты */}
        <Input
          inputmode={"email"}
          named={"email_id"}
          className={`${inputErrors.email ? "isNotValid" : "none"}`}
          placeholder={"example@email.com"}
          value={email}
          onChange={handleEmailChange}
        />
        {/* Поле ввода номера телефона */}
        <Input
          inputmode={"tel"}
          named={"tel_number"}
          className={`${inputErrors.telNumber ? "isNotValid" : "none"}`}
          placeholder={"+7 (___) ___-__-__"}
          value={telNumber}
          onChange={handleTelNumberChange}
          id="tel_number"
          mask={"+7 (999) 999-99-99"}
          maskChar={"_"}
          onMouseDown={handleMouseDown}
        />
        {/* Уведомление некорректного ввода данных */}
        <Alert className={`${alertVisible ? "visible" : "none"}`}>
          <span onClick={() => setAlertVisible(false)}>&times;</span>
          Некорректный ввод имени, эл.почты или номера телефона
        </Alert>
        {/* Кнопка отправки данных */}
        <Button
          type="submit"
          id="send-button"
          className={`
            ${buttonDisabled ? "waiting" : "none"}
            ${
              !initialValidation ||
              (!inputErrors.fromName &&
                !inputErrors.email &&
                !inputErrors.telNumber)
                ? "none"
                : "not_allowed"
            }
            ${buttonText === "Заявка принята!" ? "success" : "none"}`}
          onMouseEnter={() => setInitialValidation(false)}
          disabled={buttonDisabled || buttonText === "Заявка принята!"}
          style={buttonDisabled ? { cursor: "not-allowed" } : {}}
        >
          {buttonText}
        </Button>
        {/* Документация обработки данных */}
        <Confidentiality>
          Нажимая «Отправить», вы подтверждаете
          <LinkTitle
            link={"documentation/privacy-policy"}
            title={"политику конфиденциальности"}
          />{" "}
          и даёте согласие на обработку персональных данных
        </Confidentiality>
      </form>
    </Container>
  );
};

export default FeedbackForm;

const Container = styled.div`
  @media (min-width: 280px) {
    width: 100%;
  }

  @media (min-width: 425px) {
    width: 90%;
    display: inline-block;
  }

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Alert = styled.div`
  background-color: ${GlobalColors.ColorDarkWhite};
  color: ${GlobalColors.ColorDarkGray};
  padding: 10px 20px 10px 20px;
  margin-bottom: 1em;
  border-radius: 1em;
  display: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */
  animation: alert 0.7s ease forwards;

  @media (min-width: 280px) {
    width: 100%;
    font-size: 14px;
  }

  @media (min-width: 375px) {
    font-size: 16px;
    text-align: left;
  }

  span {
    color: ${GlobalColors.ColorDarkGray};
    margin-left: 10px;
    font-size: 24px;
    font-weight: bold;
    float: right;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */
  }

  @media (min-width: 2560px) {
    span {
      font-size: 34px;
    }
  }

  span:hover {
    color: ${GlobalColors.ColorBlue};
  }

  &.visible {
    display: block;
  }
`;

const Button = styled.button`
  background-color: ${GlobalColors.ColorBlue};
  color: ${GlobalColors.ColorWhite};
  box-shadow: ${GlobalShadows.BoxShadow};
  border: none;
  outline: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 1em;
  font-family: Nunito-Bold;

  @media (min-width: 280px) {
    font-size: 16px;
    padding: 1em;
    width: 100%;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${GlobalColors.ColorBlueSelect};
    }

    &:active {
      background-color: ${GlobalColors.ColorDarkBlue};
      transition: 0s;
    }
  }

  @media (hover: none) {
    &:active {
      background-color: ${GlobalColors.ColorDarkBlue};
      transition: 0s;
    }
  }

  &.waiting {
    background-color: ${GlobalColors.ColorDarkGray};
    cursor: wait;
  }

  &.not_allowed {
    background-color: ${GlobalColors.ColorDarkGray};
    cursor: not-allowed;
  }
`;

const Confidentiality = styled.div`
  color: ${GlobalColors.ColorDarkBlue};
  margin-top: 1em;
  width: 100%;
  font-size: 14px;
  -webkit-user-select: text;
  /* Safari */
  -moz-user-select: text;
  /* Firefox */
  -ms-user-select: text;
  /* IE10+/Edge */
  user-select: text;
  /* Standard */
  -webkit-tap-highlight-color: initial;

  @media (min-width: 280px) {
    text-align: center;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;
