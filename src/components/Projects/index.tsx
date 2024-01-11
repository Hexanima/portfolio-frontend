import Container from "../Container";
import styles from "./project.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

function Projects() {
  return (
    <Container>
      <Container.Title text="Proyectos" />
      <ul className={styles.ProjectContainer}>
        <Projects.Item />
        <Projects.Item />
        <Projects.Item />
        <Projects.Item />
        <Projects.Item />
      </ul>
    </Container>
  );
}

Projects.Item = function () {
  return (
    <li>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mallard_080508.jpg/1200px-Mallard_080508.jpg"
        alt="Pato"
      />
      <h3>Clone The Spire</h3>
      <div className={styles.Info}>
        <p>
          Proyecto en donde clono las mecanicas y jugabilidad del videojuego
          "Slay The Spire" en una aplicacion de consola.
        </p>
        <div className={styles.Links}>
          <a href="#">
            <GitHubIcon />GitHub
          </a>
          <a href="#">
            <PublicIcon />Version en vivo
          </a>
        </div>
      </div>
    </li>
  );
};

export default Projects;
