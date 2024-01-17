import styles from "./list.module.scss";
import Container from "../Container";
import PublicIcon from "@mui/icons-material/Public";

interface ListParams {
  title: string;
  items: ListInfo[];
  id?: string;
}

function List({ title, items, id }: ListParams) {
  return (
    <Container id={id}>
      <Container.Title text={title} />
      <ul className={styles.List}>
        {items.map((item) => (
          <List.Item item={item} key={`${title}.${item.id}`} />
        ))}
      </ul>
    </Container>
  );
}

List.Item = function ({ item }: { item: ListInfo }) {
  return (
    <li key={`${item.name}`}>
      <div className={styles.Date}>
        <h3>{item.name}</h3>
        <h4>{item.location}</h4>
        <p>{item.date}</p>
      </div>
      <div className={styles.Info}>
        <div className={styles.Description}>
          {item.description.map((desc, i) => (
            <p key={`${desc[0]}.${i}`}>{desc}</p>
          ))}
        </div>
        {item.liveUrl && (
          <a target="_blank" href={item.liveUrl}>
            <PublicIcon /> Sitio en linea
          </a>
        )}
      </div>
    </li>
  );
};

export default List;
