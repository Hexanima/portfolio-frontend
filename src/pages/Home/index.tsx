import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Language from "../../components/Language";
import List from "../../components/List";
import Projects from "../../components/Projects";
import useInfo from "../../hooks/useInfo";
import Splitter from "../../components/Splitter";
import styles from "./home.module.scss";

function Home() {
  const {
    experienceList,
    educationList,
    languageList,
    projectList,
  } = useInfo();
  return (
    <div className={styles.Home}>
      <Banner />
      <div className={styles.HomeElems}>
        <About />

        <List
          id="experience"
          title="Experiencia laboral"
          items={experienceList}
        />

        <Splitter id="education" custom>
          <List title="Educación" items={educationList} />
          <Language list={languageList} />
        </Splitter>

        <Projects list={projectList} />

        <Contact />
      </div>
    </div>
  );
}

export default Home;
