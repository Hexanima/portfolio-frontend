import { useState, useRef } from "react";
import styles from "./header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [burgerToggle, setBurgerToggle] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  function toggleBurgerMenu() {
    setBurgerToggle(!burgerToggle);
    if (burgerToggle && burgerRef.current) {
      burgerRef.current.focus();
    }
  }

  function closeBurgerMenu() {
    setBurgerToggle(false);
    if (burgerToggle && burgerRef.current) {
      burgerRef.current.blur();
    }
  }

  return (
    <>
      <header className={styles.Header} id="header">
        <div className={styles.Desktop}>
          <div className={styles.Links}>
            <a href="#header">Inicio</a>
            <a href="#experience">Experiencia</a>
            <a href="#education">Educación</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto </a>
          </div>
          {/*  <div className={styles.Links}>
            <a href="#header">admin</a>
          </div> */}
        </div>
        <div className={`${styles.Mobile} ${burgerToggle && styles.Active}`}>
          <MenuIcon onClick={toggleBurgerMenu} className={styles.Button} />
        </div>
      </header>
      <div
        className={`${styles.Burger} ${burgerToggle && styles.Active}`}
        onBlur={closeBurgerMenu}
        ref={burgerRef}
      >
        <a href="#header">Inicio</a>
        <a href="#experience">Experiencia</a>
        <a href="#education">Educación</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto </a>
      </div>
    </>
  );
}

export default Header;
