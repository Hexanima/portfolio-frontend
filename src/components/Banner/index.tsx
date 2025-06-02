import styles from "./banner.module.scss";

function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.Background} style={{backgroundImage: "url(/img/CodeImage.webp)"}}></div>
      <div className={styles.Info}>
        <img src="/img/ProfilePicture.webp" alt="" />
        <div className={styles.Data}>
          <h1>Nicolas Filippelli</h1>
          <h2>Fullstack Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
