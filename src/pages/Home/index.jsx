import styles from "./home.module.css";

function Home() {
  return (
    <>
      <div className={styles.banner}>
        <img
          src="https://media.licdn.com/dms/image/D4D35AQGiarnGUnmcpw/profile-framedphoto-shrink_200_200/0/1692191466403?e=1693278000&v=beta&t=D_BQ-drCqrNWVhyssHT5Ngn0CFxkvQ-O2fNv_mG5AI4"
          alt=""
          srcset=""
        />
        <div className={styles.bannerInfo}>
          <span className={styles.bannerName}>Nicolas Filippelli</span>
          <span className={styles.bannerLabor}>Full stack developer</span>
        </div>
      </div>
      <div className={styles.container}>
        <span className={styles.containerTitle}>Acerca de mi</span>
        <div className={styles.containerInfo}>
          <span>
            Soy una persona resiliente, curiosa, apasionada por el mundo IT y la
            programación, principalmente por la programación de videojuegos.
          </span>
          <span>
            Trabajo en una panadería, y aunque no tiene nada que ver con el
            mundo IT, adquirí la habilidad de aprender rápido, así sea algo
            nuevo o de un error que tuve, adaptándome a las necesidades, siempre
            entusiasmado por mejorar.
          </span>
          <span>
            Desde chico tuve interacción constante con el ingles, haciendo que
            poco a poco lo aprendiese, teniendo un grado C2 tanto para leer como
            para escuchar.
          </span>
          <span>
            Realice el curso de Programador Web Full Stack, dado por la
            Fundación Formar junto a Digital House, en el cual aprendimos desde
            el diseño hasta el desarrollo de un sitio web, y aplicamos estos
            conocimientos creando un ecommerce con vistas responsive, sistemas
            ABM, uso de cookies y creación de APIs, te invito a ver el
            repositorio de Animal Park:
            https://github.com/RamonBritez/Grupo_5_Animal_Park
          </span>
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
                <span>C#, Trabajo en equipo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
