import { ReactNode } from "react";
import styles from "./container.module.scss";

interface ContainerParams {
  children: ReactNode;
  id?: string;
}

function Container({ children, id }: ContainerParams) {
  return <div id={id} className={styles.Container}>{children}</div>;
}

Container.Title = function ({ text }: { text: string }) {
  return <h2 className={styles.Title}>{text}</h2>;
};

export default Container;
