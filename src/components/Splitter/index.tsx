import { ReactNode } from "react";
import styles from "./splitter.module.scss";

function Splitter({
  children,
  id,
  custom,
}: {
  children: ReactNode;
  id: string;
  custom?: boolean;
}) {
  return (
    <div id={id} className={`${styles.Splitter} ${custom && styles.Custom}`}>
      {children}
    </div>
  );
}

export default Splitter;
