import styles from "./Contacts.module.css";
import PageContainer from "../PageContainer";
import TitleSection from "../TitleSection";
import FeedbackForm from "./components/FeedbackForm";
import ContactsData from "./components/ContactsData";

export default function Contacts() {
  return (
    <PageContainer section="contacts">
      <TitleSection text="Контакты и обратная связь" />
      <div className={styles.container}>
        <FeedbackForm
          serviceId="service_9ayjieh"
          templateId="template_xiaae2e"
          userId="cbpUGnlBv2k2tjHvf"
          formDisabled={true}
        />
        <ContactsData
          name="Викторов Евгений"
          number="+7 (913) 684-55-43"
          email="eviktorovvv@gmail.com"
        />
      </div>
    </PageContainer>
  );
}
