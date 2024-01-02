import { ReactNode } from "react";
import styles from "./container.module.scss";

function Container({ children }: { children: ReactNode }) {
  return <div className={styles.Container}>{children}</div>;
}

Container.Title = function ({ text }: { text: string }) {
  return <h2 className={styles.Title}>{text}</h2>;
};

export default Container;
