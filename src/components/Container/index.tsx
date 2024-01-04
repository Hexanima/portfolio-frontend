import { ReactNode } from "react";
import styles from "./container.module.scss";

interface ContainerParams {
  children: ReactNode;
}

function Container({ children }: ContainerParams) {
  return <div className={styles.Container}>{children}</div>;
}

Container.Title = function ({ text }: { text: string }) {
  return <h2 className={styles.Title}>{text}</h2>;
};

export default Container;
