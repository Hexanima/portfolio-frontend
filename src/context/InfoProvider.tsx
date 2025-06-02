import { createContext, ReactNode, useState, useEffect } from "react";

interface InfoContextValues {
  experienceList: ListInfo[];
  educationList: ListInfo[];
  languageList: LanguageInfo[];
  projectList: ProjectInfo[];
}

export const InfoContext = createContext({} as InfoContextValues);

export function InfoProvider({ children }: { children: ReactNode }) {
  const [experienceList, setExperienceList] = useState<ListInfo[]>([]);

  const [educationList, setEducationList] = useState<ListInfo[]>([]);

  const [languageList, setLanguageList] = useState<LanguageInfo[]>([]);

  const [projectList, setProjectList] = useState<ProjectInfo[]>([]);

  useEffect(() => {
    setExperienceList([
      {
        id: 1,
        name: "Desarrollador Full Stack",
        location: "ForIt Software Factory",
        date: "10/2024 - Actualidad",
        description: [
          "Desarrollo de plataforma integral de servicio de empleo (recruiting) multi-tenant para AMIA.",
          "Tecnologías Aplicadas: TypeScript, Vitest, NodeJs, PostgreSQL, ReactJs, TailwindCss y Storybook.",
          "Prácticas: Test Driven Development, Arquitectura Limpia, Código Limpio, Programación Funcional."
        ],
      },
      {
        id: 2,
        name: "Desarrollador Frontend",
        location: "ForIt Software Factory",
        date: "7/24 - 01/2025",
        description: [
          "Desarrollo de dos aplicaciones móviles para el Banco de Alimentos en conjunto con Finnegans",
          "Tecnologías aplicadas: TypeScript, React.js, Storybook, Capacitor, Clean Architecture.",
          "Prácticas: Test Driven Development, Arquitectura Limpia, Código Limpio, Programación Funcional."
        ],
      },
      {
        id: 3,
        name: "Desarrollador Full Stack",
        location: "ForIt Software Factory",
        date: "3/24 - Actualidad",
        description: [
          "Desarrollo de un proyecto de e-commerce para un mayorista, centrando en la gestión compleja de categorías, subcategorías, productos y variantes. ",
          "El sistema ofrece funciones clave como gestión de productos, inventario, búsqueda y carrito de compras, con un panel de administración intuitivo para una gestión eficiente.",
          "Tecnologías aplicadas: TypeScript, Node.js, React.js, SQL, TDD, Clean Architecture, Docker.",
          "Practicas: Test Driven Development, Arquitectura Limpia, Código Limpio, Programación Funcional."
        ],
      },
    ]);

    setEducationList([
      {
        id: 1,
        name: "Desarrollador Full Stack",
        description: [
          "Incubadora de talento para programadores.",
          "Programa de entrenamiento laboral de 6 meses.",
          "Durante el período, recibí formación especializada en habilidades técnicas y blandas.",
        ],
        date: "3/24 - Actualidad",
        location: "ForIt Software Factory",
      },
      {
        id: 2,
        name: "Desarrollador Full Stack",
        description: [
          "Curso en el cual aprendimos desde el diseño hasta el desarrollo de un sitio web, y aplicamos estos conocimientos creando un ecommerce con vistas responsive, sistemas ABM, uso de cookies y creación de APIs.",
        ],
        date: "9/22 - 7/23",
        location: "Digital House",
      },
    ]);

    setLanguageList([
      { id: 1, title: "Español", grade: "Nativo" },
      {
        id: 2,
        title: "Ingles",
        grade: "Grado C2",
        certificate: "https://www.efset.org/cert/hDaGDF",
      },
    ]);

    setProjectList([
      {
        id: 1,
        img: "img/Adviency.webp",
        title: "Adviency 2023",
        info: `Desafío de adviento de lista de regalos en el cual dia a dia agregamos funciones nuevas`,
        gitUrl: "https://github.com/Hexanima/Adviency2023",
      },
      {
        id: 2,
        img: "img/animalParkGif.webp",
        title: "Animal Park",
        info:
          "Proyecto integrador para el curso de Desarrollador Web Full Stack dado por la Fundación Formar junto a Digital House.",
        gitUrl: "https://github.com/RamonBritez/Grupo_5_Animal_Park",
      },
      {
        id: 3,
        img: "img/godotAsteroids.webp",
        title: "Godot Asteroids",
        info:
          "El clásico juego \"Asteroids\", hecho y re-imaginado en el motor de videojuegos Godot 4.",
        gitUrl: "https://github.com/Hexanima/GodotAsteroids",
      },
      {
        id: 4,
        img: "img/AnimalParkImg.webp",
        title: "Animal Park - Reimagined",
        info:
          "Vuelta al desarrollo del proyecto integrador para el curso de Digital House, recreado con C# usando ASP.NET.",
        gitUrl: "https://github.com/Hexanima/AnimalParkReimagined",
      },
    ]);
  }, []);

  const contextValues = {
    experienceList,
    educationList,
    languageList,
    projectList,
  };

  return (
    <InfoContext.Provider value={contextValues}>
      {children}
    </InfoContext.Provider>
  );
}
