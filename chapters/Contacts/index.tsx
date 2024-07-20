import styles from "./Contacts.module.css";
import PageContainer from "@/components/PageContainer";
import TitleSection from "@/components/TitleSection";
import FeedbackForm from "./components/FeedbackForm";
import ContactsData from "./components/ContactsData";
import ContactsSocial from "./components/ContactsSocial";
import GitHub from "@/public/assets/icons/GitHub.svg";
import Figma from "@/public/assets/icons/Figma.svg";
import Linkedin from "@/public/assets/icons/Linkedin.svg";

export default function Contacts() {
  return (
    <PageContainer section="contacts">
      <TitleSection text="Контакты и обратная связь" />
      <div className={styles.container}>
        {/* EmailJs-Form */}
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
        >
          <ContactsSocial
            link="https://github.com/eugeneviktorov"
            icon={GitHub}
            alt="GitHub"
          />
          <ContactsSocial
            link="https://www.figma.com/@eugeneviktorov"
            icon={Figma}
            alt="Figma"
          />
          <ContactsSocial
            link="https://www.linkedin.com/in/eugeneviktorov"
            icon={Linkedin}
            alt="Linkedin"
          />
        </ContactsData>
      </div>
    </PageContainer>
  );
}
