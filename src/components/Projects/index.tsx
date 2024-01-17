import Container from "../Container";
import styles from "./project.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

function Projects({ list }: { list: ProjectInfo[] }) {
  return (
    <Container id="projects">
      <Container.Title text="Proyectos" />
      <ul className={styles.ProjectContainer}>
        {list.map((item) => (
          <Projects.Item item={item} key={`projects.${item.id}`} />
        ))}
      </ul>
    </Container>
  );
}

Projects.Item = function ({ item }: { item: ProjectInfo }) {
  return (
    <li>
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <div className={styles.Info}>
        <p>{item.info}</p>
        <div className={styles.Links}>
          {item.gitUrl && (
            <a href={item.gitUrl} target="_blank">
              <GitHubIcon />
              GitHub
            </a>
          )}
          {item.liveUrl && (
            <a href={item.liveUrl} target="_blank">
              <PublicIcon />
              Version en vivo
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default Projects;
