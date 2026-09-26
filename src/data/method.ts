export type MethodStep = {
  id: string;
  code: string;
  name: string;
  role: string;
  benefit: string;
};

export const method: MethodStep[] = [
  {
    id: "re-sol",
    code: "01",
    name: "RE-SOL",
    role:
      "Traitement in-situ des terres excavées. Transformation en technosols fertiles directement sur le chantier.",
    benefit:
      "Supprime les coûts d'évacuation et réduit la facture de terrassement de 20 % à 50 %.",
  },
  {
    id: "pru",
    code: "02",
    name: "PRU",
    role:
      "Potentiel de Résilience Urbaine. Évaluation de la capacité d'un site à capter l'eau, accueillir la biodiversité et devenir productif.",
    benefit:
      "Cartographie objective de la valeur écologique latente d'un site, en amont de toute décision d'aménagement.",
  },
  {
    id: "ipn",
    code: "03",
    name: "IPN-RECOLT",
    role:
      "Indice de Production Nourricière. Modélisation, cartographie (drones, outils 3D) et quantification de la production comestible potentielle.",
    benefit:
      "Chiffrage de la production alimentaire attendue — argument scientifique pour les maîtres d'ouvrage.",
  },
];