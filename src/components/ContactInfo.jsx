import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import styles from '../styles/components/ContactInfo.module.css';
import InfoCard from './InfoCard';

const ContactInfo = () => {
  return (
    <>
      <section className={styles.contactInfo}>
        <InfoCard
          iconName={styles.infoPhone}
          icon={<AiFillPhone />}
          title="Telefone:"
          paragraph="+55 (21) 97490-3005"
        />
        <InfoCard
          iconName={styles.infoEmail}
          icon={<AiOutlineMail />}
          title="Email:"
          paragraph="nicolasesmael1998@gmail.com"
        />
        <InfoCard
          iconName={styles.infoLocation}
          icon={<AiFillEnvironment />}
          title="Localização:"
          paragraph="Rio de Janeiro, Brasil"
        />
      </section>
    </>
  )
}

export default ContactInfo