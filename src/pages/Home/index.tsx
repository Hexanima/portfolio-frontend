import About from "../../components/About";
import Banner from "../../components/Banner";
import List from "../../components/List";
import useInfo from "../../hooks/useInfo";
import styles from "./home.module.scss";

function Home() {
  const { experienceList } = useInfo();
  return (
    <div className={styles.Home}>
      <Banner />
      <div className={styles.HomeElems}>
        <About />
        <List title="Experiencia laboral" items={experienceList} />
      </div>
    </div>
  );
}

export default Home;
