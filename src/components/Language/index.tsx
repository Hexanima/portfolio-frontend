import Container from "../Container";
import styles from "./language.module.scss";

function Language() {
  return (
    <Container>
      <Container.Title text="Idioma" />
      <ul className={styles.Language}>
        <li>
          <h3>Ingles</h3>
          <h4>Grado C2</h4>
          <a href="">Certificado</a>
        </li>
        <li>
          <h3>Ingles</h3>
          <h4>Grado C2</h4>
          <a href="">Certificado</a>
        </li>
        <li>
          <h3>Ingles</h3>
          <h4>Grado C2</h4>
          <a href="">Certificado</a>
        </li>
        <li>
          <h3>Ingles</h3>
          <h4>Grado C2</h4>
          <a href="">Certificado</a>
        </li>
        <li>
          <h3>Ingles</h3>
          <h4>Grado C2</h4>
          <a href="">Certificado</a>
        </li>
      </ul>
    </Container>
  );
}

export default Language;
