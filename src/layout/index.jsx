import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./layout.module.css"

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.maincontainer}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
