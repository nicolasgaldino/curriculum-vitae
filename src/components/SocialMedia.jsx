import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from '../styles/components/SocialMedia.module.css';

const socialNetworks = [
  { name: "linkedin", link: "https://www.linkedin.com/in/nícolas-galdino-esmael-8370ab199", icon: <FaLinkedin /> },
  { name: "github", link: "https://github.com/nicolasgaldino", icon: <FaGithub /> },
  { name: "twitter", link: "https://twitter.com/galdino_esmael", icon: <FaTwitter /> },
  { name: "instagram", link: "https://www.instagram.com/galdino_esmael/", icon: <FaInstagram /> },
];

const SocialMedia = () => {
  return (
    <>
      <section className={styles.socialNetworks}>
        {socialNetworks.map((item) => (
          <a
          href={item.link}
          className={styles.socialBtn}
          id={item.name}
          target="_blank"
          rel="noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </section>
    </>
  )
}

export default SocialMedia