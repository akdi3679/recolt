export const pricing = {
  eyebrow: "Comment nous facturons",
  heading: "Chaque projet est différent. Notre grille ne l'est pas.",
  intro:
    "Nous ne publions pas de tarif fixe : un diagnostic sur 200 m² de toiture et une étude sur 5 hectares de friche n'engagent pas les mêmes moyens. Mais nous publions un cadre transparent — pour que vous sachiez à quoi vous attendre avant même de nous écrire.",
  tiers: [
    {
      code: "01",
      name: "Diagnostic RE-SOL",
      scope:
        "Caractérisation des terres excavées, formulation de technosols, préconisations de traitement in-situ.",
      priceFrom: "à partir de 3 500  HT",
      duration: "2–4 semaines",
      suitableFor:
        "Chantiers avec terres excavées, promoteurs, aménageurs",
    },
    {
      code: "02",
      name: "Étude PRU",
      scope:
        "Potentiel de Résilience Urbaine : cartographie multi-échelle, captation d'eau, biodiversité.",
      priceFrom: "à partir de 6 500  HT",
      duration: "3–6 semaines",
      suitableFor: "Collectivités, bailleurs, aménageurs de quartier",
    },
    {
      code: "03",
      name: "Diagnostic IPN-RECOLT",
      scope:
        "Indice de Production Nourricière : relevés drone, modélisation 3D, quantification kg/an.",
      priceFrom: "à partir de 8 000  HT",
      duration: "4–8 semaines",
      suitableFor:
        "Projets nourriciers, appels d'offres publics, dossiers réglementaires",
    },
    {
      code: "04",
      name: "Diagnostic complet",
      scope:
        "Séquence intégrale RE-SOL + PRU + IPN-RECOLT. Dossier technique complet, opposable, chiffré.",
      priceFrom: "sur devis",
      duration: "6–12 semaines",
      suitableFor:
        "Projets complexes, marchés publics, aménagement global",
    },
  ],
  note: "Les fourchettes indiquées sont des ordres de grandeur pour un projet standard. Le devis définitif est établi après un premier échange et, si nécessaire, une visite de site.",
  callout: {
    title: "Éligible aux marchés publics",
    body: "Nous fournissons l'ensemble des pièces administratives requises (DC1, DC2, DUME, références, CV équipe). Réponse aux appels d'offres sous 5 jours ouvrés.",
    cta: { label: "Voir notre volet secteur public", href: "/secteur-public" },
  },
} as const;