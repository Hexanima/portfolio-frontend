import styles from "./list.module.scss";
import Container from "../Container";

interface ListParams {
  title: string;
  items: ListInfo[];
}

function List({ title, items }: ListParams) {
  return (
    <Container>
      <Container.Title text={title} />
      <ul className={styles.List}>
        {items.map((item) => (
          <li key={`${item.name}`}>
            <div className={styles.Date}>
              <h3>{item.name}</h3>
              <h4>{item.location}</h4>
              <p>{item.date}</p>
            </div>
            <div className={styles.Info}>
              {item.description.map((desc) => (
                <p>{desc}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default List;
