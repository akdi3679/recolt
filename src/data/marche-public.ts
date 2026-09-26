export const marchePublic = {
  eyebrow: "Secteur public",
  heading: "Travailler avec nous dans un cadre de commande publique.",
  intro:
    "B.E. RECOLT est structuré pour répondre aux marchés publics d'études environnementales et de génie écologique. Nous fournissons l'ensemble des pièces administratives requises sous 5 jours ouvrés.",
  credentials: [
    {
      label: "Enregistrement",
      value: "Registre de la Transparence de l'Union Européenne",
    },
    {
      label: "Conformité réglementaire",
      value: "ZAN — Zéro Artificialisation Nette · RE2020",
    },
    {
      label: "Domaines d'intervention",
      value:
        "Pédologie · hydrologie urbaine · cartographie SIG · production alimentaire",
    },
  ],
  documents: [
    "DC1 — Lettre de candidature",
    "DC2 — Déclaration du candidat",
    "DUME — Document unique de marché européen",
    "Références de projets similaires",
    "CV et diplômes de l'équipe technique",
    "Attestations fiscales et sociales",
    "Chiffre d'affaires des 3 derniers exercices",
    "Mémoire technique adapté au cahier des charges",
  ],
  process: [
    { step: "01", label: "Réception du DCE", duration: "J+0" },
    { step: "02", label: "Étude et questions", duration: "J+1 à J+3" },
    {
      step: "03",
      label: "Montage du mémoire technique",
      duration: "J+3 à J+5",
    },
    { step: "04", label: "Dépôt de l'offre", duration: "avant date limite" },
  ],
  cta: { label: "Nous transmettre un DCE", href: "/contact" },
} as const;