export const differentiation = {
  eyebrow: "Positionnement",
  heading: "Pourquoi pas votre ingénieur BTP ? Pourquoi pas un paysagiste ?",
  intro:
    "Trois réponses existent aujourd'hui à la question du vivant en ville. RECOLT propose la quatrième.",
  options: [
    {
      label: "Votre ingénieur BTP",
      subtitle: "Vinci, Eiffage, ou votre BET structure",
      body: "Il traite la terre comme un déchet à évacuer, ou un sol porteur à stabiliser. Sa mission s'arrête à la portance. Il ne caractérise pas la fertilité, ne modélise pas la production.",
      limitations: [
        "Pas de caractérisation agronomique",
        "Pas de modélisation de production",
        "Pas de compétence pédologique",
      ],
    },
    {
      label: "Un paysagiste",
      subtitle: "Concepteur d'espaces verts",
      body: "Il embellit, il plante, il entretient. Il travaille à l'intuition, sur la base de références visuelles. Il ne produit ni donnée chiffrée, ni livrable opposable.",
      limitations: [
        "Pas de diagnostic scientifique",
        "Pas de données chiffrées",
        "Pas adapté aux marchés publics",
      ],
    },
    {
      label: "Ne rien faire",
      subtitle: "La solution par défaut",
      body: "Évacuer la terre, artificialiser, laisser la friche stérile. C'est la solution la plus coûteuse à moyen terme : frais de déchetterie, non-conformité ZAN, perte de valeur foncière.",
      limitations: [
        "Coûts d'évacuation (20–50 % terrassement)",
        "Risque réglementaire ZAN",
        "Valeur foncière non activée",
      ],
    },
  ],
  reco: {
    label: "RECOLT",
    subtitle: "Bureau d'études en ingénierie nourricière",
    body: "Nous faisons ce que personne d'autre ne fait : le diagnostic scientifique du vivant, avant toute décision d'aménagement. Livrables chiffrés, opposables, alignés sur ZAN et RE2020.",
    advantages: [
      "Caractérisation agronomique et biologique",
      "Modélisation de production (kg/an)",
      "Livrables opposables en marchés publics",
      "Traitement in-situ — économie de 20–50 %",
      "Conformité ZAN et RE2020 documentée",
    ],
  },
} as const;