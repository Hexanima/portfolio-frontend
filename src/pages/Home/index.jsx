import { useEffect, useState, useRef } from "react";
import styles from "./home.module.css";

function Home() {
  const infoText =
    "Este es el portafolio de Nicolás Filippelli, el cual aun está en desarrollo, a futuro habrá mejor información, muchas gracias.";

  const [text, setText] = useState("");
  const [pos, setPos] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start && pos < infoText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + infoText[pos])
        setPos(prevPos => prevPos + 1)
      }, 50)
    } else {
      const timeout = setTimeout(() => {
        setStart(true)
      }, 2500)
    }
  }, [pos, start]);

  return (
    <div className={styles.title}>
      <h1>¡Hola! ¿Qué tal?</h1>
      <h5>{text}</h5>
    </div>
  );
}

export default Home;
