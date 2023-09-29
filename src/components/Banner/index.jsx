import styles from "./banner.module.css";
import profilePicture from "../../assets/Profile Picture.jpeg";

function Banner() {
  return (
    <div className={styles.banner}>
      <img src={profilePicture} alt="" srcset=""  />
      <div className={styles.bannerInfo}>
        <span className={styles.bannerName}>Nicolas Filippelli</span>
        <span className={styles.bannerLabor}>Full stack developer</span>
      </div>
    </div>
  );
}

export default Banner;
