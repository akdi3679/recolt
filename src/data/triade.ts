export const triade = {
  eyebrow: "Impact",
  heading: "Sols vivants. Eau captée. Nourriture.",
  items: [
    {
      title: "Sols vivants",
      body: "Les terres excavées sont revalorisées en technosols fertiles.",
      indicator: "C org",
      icon: "soil" as const,
    },
    {
      title: "Eau captée",
      body: "L’eau de pluie est infiltrée, stockée puis restituée au site.",
      indicator: "L/s",
      icon: "water" as const,
    },
    {
      title: "Nourriture",
      body: "La production comestible est estimée et cartographiée.",
      indicator: "kg/an",
      icon: "wheat" as const,
    },
  ],
} as const;