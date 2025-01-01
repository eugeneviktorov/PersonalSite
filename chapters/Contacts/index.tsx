import PageChapter from "@/components/PageChapter";
import TitleChapter from "@/components/TitleChapter";
import Figma from "@/public/assets/images/Figma.svg";
import GitHub from "@/public/assets/images/GitHub.svg";
import Linkedin from "@/public/assets/images/Linkedin.svg";

import ContactsData from "./components/ContactsData";
import ContactsSocial from "./components/ContactsSocial";
import FeedbackForm from "./components/FeedbackForm";
import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <PageChapter section="contacts">
      <div className={styles.container}>
        <TitleChapter text="Контакты и обратная связь" />
        <div className={styles.content}>
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
      </div>
    </PageChapter>
  );
}
