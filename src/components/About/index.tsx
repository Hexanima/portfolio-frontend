import { ReactNode } from "react";
import Container from "../Container";
import styles from "./about.module.scss";

function About() {
  return (
    <Container>
      <Container.Title text="Acerca de mi" />
      <About.Parraph>
        Soy una persona curiosa, apasionada por el mundo IT y siempre deseando
        aprender sobre programación, principalmente por la programación de
        videojuegos.
      </About.Parraph>
      <About.Parraph>
        Desde pequeño aprendi poco a poco por cuenta propia el idioma Ingles,
        llegando hoy en dia a obtener un certificado de grado C2 bajo el test de
        EF-SET
      </About.Parraph>
      <About.Parraph>
        Completé el curso Fullstack Developer de Digital House, donde diseñamos
        y desarrollamos varias páginas y realizamos un proyecto de e-commerce,
        utilizando diversas tecnologías, principalmente ExpressJs, EJS, MySql y
        ORM Sequelize y ReactJs. Te invito a ver el repositorio de{" "}
        <a
          href="https://github.com/RamonBritez/Grupo_5_Animal_Park"
          target="_blank"
        >
          Animal Park
        </a>
      </About.Parraph>
    </Container>
  );
}

About.Parraph = function ({ children }: { children: ReactNode }) {
  return <p className={styles.About}>{children}</p>;
};

export default About;
