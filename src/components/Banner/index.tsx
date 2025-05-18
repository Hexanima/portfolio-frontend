import styles from "./banner.module.scss";

function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.Background} style={{backgroundImage: "url(/img/CodeImage.jpg)"}}></div>
      <div className={styles.Info}>
        <img src="/img/Profile Picture.jpeg" alt="" />
        <div className={styles.Data}>
          <h1>Nicolas Filippelli</h1>
          <h2>Fullstack Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
