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
        name: "Desarrollador Freelance",
        location: "Le Baguette",
        date: "11/23",
        description: [
          "Diseño y desarrollo de sitio web para panificadora en crecimiento.",
        ],
        liveUrl: "https://www.lebaguettepanificadora.com.ar",
      },
      {
        id: 2,
        name: "Panadero",
        location: "Le Baguette",
        date: "6/22 - Actualidad",
        description: [
          "Armado de pedidos para despacho a diferentes panaderías y despensas, procesando más de 250kg de pan por día.",
          "Producción de diferentes panificados para venta y despacho, usando más de 300kg de harina al día.",
        ],
      },
    ]);

    setEducationList([
      {
        id: 1,
        name: "Desarrollador .NET",
        description: [
          "Curso autodidacta donde aprendo el lenguaje C# y el framework .NET",
          "WPF, Databases, Linq, Collections, Game Development con Unity, Unit Testing TDD",
        ],
        date: "1/24 - Actualidad",
        location: "Udemy - Tutorials.eu por Denis Panjuta",
      },
      {
        id: 2,
        name: "Desarrollador FullStack JS",
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
        img: "img/Adviency.png",
        title: "Adviency 2023",
        info: `Desafio de adviento de lista de regalos en el cual dia a dia agregamos funciones nuevas`,
        gitUrl: "https://github.com/Hexanima/Adviency2023",
      },
      {
        id: 2,
        img: "img/AnimalPark.png",
        title: "Animal Park",
        info:
          "Proyecto integrador para el curso de Desarrollador Web Full Stack dado por la Fundación Formar junto a Digital House.",
        gitUrl: "https://github.com/RamonBritez/Grupo_5_Animal_Park",
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
