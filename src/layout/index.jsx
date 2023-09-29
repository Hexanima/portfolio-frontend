import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./layout.module.css"

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.maincontainer}>
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
