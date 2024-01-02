import About from "../../components/About";
import Banner from "../../components/Banner";
import styles from "./home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Banner />
      <div className={styles.HomeElems}>
        <About />
      </div>
    </div>
  );
}

export default Home;
