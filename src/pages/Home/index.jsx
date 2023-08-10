import { useEffect, useState } from "react";
import styles from "./home.module.css";

function Home() {
  const infoText =
    "Este es el portafolio de Nicolás Filippelli, el cual aun está en desarrollo, a futuro habrá mejor información, muchas gracias.";
  useEffect(() => {}, []);

  return (
    <div className={styles.title}>
      <h1>¡Hola! ¿Qué tal?</h1>
      <h5>{infoText}</h5>
    </div>
  );
}

export default Home;
