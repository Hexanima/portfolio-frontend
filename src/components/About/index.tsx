import { ReactNode } from "react";
import styles from "./about.module.scss";

function About() {
  return (
    <About.Parraph>
      Una persona curiosa, apasionada por el mundo IT, aspirando a desarrollar
      videojuegos.
    </About.Parraph>
  );
}

About.Parraph = function ({ children }: { children: ReactNode }) {
  return <p className={styles.About}>{children}</p>;
};

export default About;
