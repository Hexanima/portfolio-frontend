import { createContext, ReactNode } from "react";

interface InfoContextValues {
  experienceList: ListInfo[];
}

export const InfoContext = createContext({} as InfoContextValues);

export function InfoProvider({ children }: { children: ReactNode }) {
  const experienceList = [
    {
      name: "Panadero",
      location: "Le Baguette",
      date: "22/9/22 - 15/6/23",
      description: [
        "Armado de pedidos para despacho a diferentes panaderías y despensas, procesando más de 250kg de pan por día.",
        "Producción de diferentes panificados para venta y despacho, usando más de 300kg de harina al día.",
      ],
    },
    {
      name: "Panadero",
      location: "Le Baguette",
      date: "22/9/22 - 15/6/23",
      description: [
        "Armado de pedidos para despacho a diferentes panaderías y despensas, procesando más de 250kg de pan por día.",
        "Producción de diferentes panificados para venta y despacho, usando más de 300kg de harina al día.",
      ],
    },
    {
      name: "Panadero",
      location: "Le Baguette",
      date: "22/9/22 - 15/6/23",
      description: [
        "Armado de pedidos para despacho a diferentes panaderías y despensas, procesando más de 250kg de pan por día.",
        "Producción de diferentes panificados para venta y despacho, usando más de 300kg de harina al día.",
      ],
    },
  ];
  const contextValues = { experienceList };

  return (
    <InfoContext.Provider value={contextValues}>
      {children}
    </InfoContext.Provider>
  );
}
