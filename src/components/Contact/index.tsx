import Container from "../Container";
import styles from "./contact.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  return (
    <Container id="contact">
      <Container.Title text="Contacto" />
      <div className={styles.Contact}>
        <a href="https://www.linkedin.com/in/nicolas-filippelli" target="_blank">
          <LinkedInIcon />
          LinkedIn
        </a>
        <a href="https://www.github.com/Hexanima" target="_blank">
          <GitHubIcon />
          GitHub
        </a>
        <a href="https://wa.me/+541159984867" target="_blank">
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </Container>
  );
}

export default Contact;
