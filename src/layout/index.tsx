import { ReactNode } from "react";
import styles from "./layout.module.scss";
import Header from "./components/Header";
//import Footer from "./components/Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.Layout}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
