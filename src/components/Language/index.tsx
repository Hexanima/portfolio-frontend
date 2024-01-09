import Container from "../Container";
import styles from "./language.module.scss";

interface LanguageProps {
  list: LanguageItem[];
}

function Language({ list }: LanguageProps) {
  return (
    <Container>
      <Container.Title text="Idiomas" />
      <ul className={styles.Language}>
        {list.map((item) => (
          <Language.Item item={item} key={`${item.title}.${item.grade}`} />
        ))}
      </ul>
    </Container>
  );
}

Language.Item = function ({ item }: { item: LanguageItem }) {
  return (
    <li>
      <h3>{item.title}</h3>
      <h4>Grado {item.grade}</h4>
      {item.certificate && (
        <a href={item.certificate} target="_blank">
          Certificado
        </a>
      )}
    </li>
  );
};

export default Language;
