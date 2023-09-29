import Banner from "../../../components/Banner";
import styles from "./header.module.css";

function Header() {
  return <header className={styles.header}><Banner/></header>;
}

export default Header;
