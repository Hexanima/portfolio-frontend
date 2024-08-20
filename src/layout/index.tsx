import { ReactNode, useState } from "react";
import styles from "./layout.module.scss";
import Header from "./components/Header";
//import Footer from "./components/Footer";

function Layout({ children }: { children: ReactNode }) {
  const [readyToShow, setReadyToShow] = useState(false)

  return (
    <div className={`${styles.Layout} ${readyToShow && styles.Loaded}`} onLoad={() => setReadyToShow(true)}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
