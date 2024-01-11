import Container from "../Container";
import styles from "./contact.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  return (
    <Container>
      <Container.Title text="Contacto" />
      <div className={styles.Contact}>
        <a href="">
          <LinkedInIcon />
          LinkedIn
        </a>
        <a href="">
          <GitHubIcon />
          GitHub
        </a>
        <a href="">
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </Container>
  );
}

export default Contact;
