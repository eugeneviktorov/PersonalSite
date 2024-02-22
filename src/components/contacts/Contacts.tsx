import * as React from "react";
import styled from "styled-components";
import PageContainer from "../PageContainer";
import TitleSection from "../TitleSection";
import FeedbackForm from "./feedbackForm/FeedbackForm";
import ContactsData from "./contactsData/ContactsData";

const Contacts = () => {
  return (
    <PageContainer idSection="feedback">
      <TitleSection text={"Контакты и обратная связь"} />
      <Container>
        {/* Форма обратной связи */}
        <FeedbackForm
          serviceId={"service_9ayjieh"}
          templateId={"template_xiaae2e"}
          userId={"cbpUGnlBv2k2tjHvf"}
        />
        {/* Контактные данные */}
        <ContactsData
          name={"Викторов Евгений"}
          number={"+7 (913) 684-55-43"}
          email={"eviktorovvv@gmail.com"}
        />
      </Container>
    </PageContainer>
  );
};

export default Contacts;

const Container = styled.div`
  @media (min-width: 425px) {
    text-align: center;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;
