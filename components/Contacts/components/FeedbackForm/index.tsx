"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./FeedbackForm.module.css";
import Input from "../Input";
import emailjs from "emailjs-com";

export default function FeedbackForm({
  serviceId,
  templateId,
  userId,
  formDisabled,
}: {
  serviceId: string;
  templateId: string;
  userId: string;
  formDisabled: boolean;
}) {
  // Формировочные данные
  const [fromName, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [telNumber, setTelNumber] = useState("");

  // Валидационные состояния
  const [isValidUserName, setIsValidName] = useState(false);
  const [isValidUserEmail, setIsValidEmail] = useState(false);
  const [isValidNumber, setIsValidTelNumber] = useState(false);

  // Уведомление
  const [alertVisible, setAlertVisible] = useState(false);

  // Измененение состояние кнопки
  const [buttonText, setButtonText] = useState("Отправить");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [initialValidation, setInitialValidation] = useState(true);

  // Визуальная обработка ошибки данных
  const [inputErrors, setInputErrors] = useState({
    fromName: false,
    email: false,
    telNumber: false,
  });

  // Обработка отправки данных
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        await emailjs.sendForm(serviceId, templateId, e.currentTarget, userId);

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
  const handleFromNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setFromName(inputValue);
    setIsValidName(validateUsername(inputValue));
  };

  // Определения эл.почты
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  // Определения номера телефона
  const handleTelNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setTelNumber(inputValue);
    setIsValidTelNumber(validateNumber(inputValue));
  };

  // Формулы валидации данных
  const validateUsername = (username: string) =>
    /^[А-ЯЁ а-яё A-Z a-z]{2,40}$/.test(username);
  const validateEmail = (mail: string) =>
    /^[a-zA-Zа-яА-Я0-9._-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,6}$|^[a-zA-Zа-яА-Я0-9._-]+@[a-zA-Zа-яА-Я0-9.-]+$/.test(
      mail
    ) && mail.length <= 70;
  const validateNumber = (tel: string) =>
    /^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(tel);

  // Перемещение курсора в начало ввода номера телефона
  const handleMouseDown = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    // Активация поля ввода
    if (
      document.activeElement &&
      !document.activeElement.isSameNode(e.currentTarget)
    ) {
      e.currentTarget.focus();
    }
  };

  return (
    <div className={styles.container}>
      <form id="form" onSubmit={handleSubmit}>
        {/* Поле ввода имени */}
        <Input
          inputMode="text"
          named="from_name"
          className={`${styles.input} ${
            inputErrors.fromName ? styles.isNotValid : "none"
          }`}
          placeholder="Ваше имя"
          value={fromName}
          onChange={handleFromNameChange}
          disabled={formDisabled}
        />
        {/* Поле ввода эл.почты */}
        <Input
          inputMode="email"
          named="email_id"
          className={`${styles.input} ${
            inputErrors.email ? styles.isNotValid : "none"
          }`}
          placeholder="example@email.com"
          value={email}
          onChange={handleEmailChange}
          disabled={formDisabled}
        />
        {/* Поле ввода номера телефона */}
        <Input
          inputMode="tel"
          named="tel_number"
          className={`${styles.input} ${
            inputErrors.telNumber ? styles.isNotValid : "none"
          }`}
          placeholder="+7 (___) ___-__-__"
          value={telNumber}
          onChange={handleTelNumberChange}
          id="tel_number"
          mask="+7 (999) 999-99-99"
          maskChar="_"
          onMouseDown={handleMouseDown}
          disabled={formDisabled}
        />
        {/* Уведомление некорректного ввода данных */}
        <div
          className={`${styles.alert} ${
            alertVisible ? styles.visible : styles.none
          }`}
        >
          <span onClick={() => setAlertVisible(false)}>&times;</span>
          Некорректный ввод имени, эл.почты или номера телефона
        </div>
        {/* Кнопка отправки данных */}
        <button
          type="submit"
          id="send-button"
          className={`${styles.button} ${
            buttonDisabled ? styles.waiting : "none"
          } ${
            !initialValidation ||
            (!inputErrors.fromName &&
              !inputErrors.email &&
              !inputErrors.telNumber)
              ? "none"
              : styles.notAllowed
          }
            ${buttonText === "Заявка принята!" ? "success" : "none"}`}
          onMouseEnter={() => setInitialValidation(false)}
          disabled={buttonDisabled || formDisabled}
          style={buttonDisabled ? { cursor: "not-allowed" } : {}}
        >
          {formDisabled ? "ВРЕМЕННО НЕ РАБОТАЕТ" : buttonText}
        </button>
        {/* Документация обработки данных */}
        <div className={styles.confidentiality}>
          Нажимая «Отправить», вы подтверждаете{" "}
          <Link href="documentation/privacy-policy">
            политику конфиденциальности
          </Link>{" "}
          и даёте согласие на обработку персональных данных
        </div>
      </form>
    </div>
  );
}
