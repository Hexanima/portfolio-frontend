import Banner from "../../components/Banner";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.containerTitle}>Acerca de mi</span>
        <div className={styles.containerInfo}>
          <span>
            Soy una persona curiosa, apasionada por el mundo IT, siempre
            deseando aprender más sobre programacion, especialmente programacion
            de videojuegos.
          </span>
          <span>
            Realice el curso de Programador Web Full Stack, dado por la
            Fundación Formar junto a Digital House, en el cual diseñamos y
            desarrollamos varias paginas, principalmente un proyecto de
            e-commerce, usando varios lenguajes y tecnologias, principalmente
            Express Js, EJS, MySql, y ReactJs. Te invito a ver el repositorio de <a
              href="https://github.com/RamonBritez/Grupo_5_Animal_Park"
              target="_blank"
              rel="noopener noreferrer"
            >
              Animal Park
            </a>
          </span>
          <span>
            Desde chico jugaba juegos en ingles, aprendiendo poco a poco el
            idioma por mi cuenta, logrando actualmente obtener un grado C2 con
            el test EF-SET
          </span>
        </div>
      </div>
      <div className={styles.container}>
        <span className={styles.containerTitle}>Experiencia</span>
        <div className={styles.containerInfo}>
          <div className={styles.locationContainer}>
            <div className={styles.locationTitle}>
              <span>Panadero</span>
              <span>Panaderia Le Baguette</span>
              <span>Julio 2022 - Actualidad</span>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.locationTasks}>
                <span>
                  Armado de pedidos para despacho a diferentes panaderías y
                  despensas, procesando más de 250kg de pan por día.
                </span>
                <span>
                  Producción de diferentes panificados para venta y despacho,
                  usando más de 300kg de harina al día.
                </span>
              </div>
              <div className={styles.locationSkills}>
                <span>Trabajo en equipo, aprendizaje rapido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <span className={styles.containerTitle}>Educacion</span>
        <div className={styles.containerInfo}>
          <div className={styles.locationContainer}>
            <div className={styles.locationTitle}>
              <span>Panadero</span>
              <span>Panaderia Le Baguette</span>
              <span>Julio 2022 - Actualidad</span>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.locationTasks}>
                <span>
                  Armado de pedidos para despacho a diferentes panaderías y
                  despensas, procesando más de 250kg de pan por día.
                </span>
                <span>
                  Producción de diferentes panificados para venta y despacho,
                  usando más de 300kg de harina al día.
                </span>
              </div>
              <div className={styles.locationSkills}>
                <span>Trabajo en equipo, aprendizaje rapido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <span className={styles.containerTitle}>Habilidades</span>
      </div>
      <div className={styles.container}>
        <span className={styles.containerTitle}>Proyectos</span>
      </div>
    </>
  );
}

export default Home;
