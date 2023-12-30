import { ReactNode } from "react";
import styles from "./layout.module.scss";
import Header from "./components/Header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.Layout}>
      {/* <Header /> */}
      <main>{children}</main>
    </div>
  );
}

export default Layout;
