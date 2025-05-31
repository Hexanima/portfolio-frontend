import { ReactNode } from "react";
import styles from "./about.module.scss";

function About() {
  return (
    <>
      <About.Parraph>
        Una persona curiosa y apasionada por el desarrollo, aspirando a crear grandes juegos y sistemas.
      </About.Parraph>
    </>
  );
}

About.Parraph = function ({ children }: { children: ReactNode }) {
  return <p className={styles.About}>{children}</p>;
};

export default About;
