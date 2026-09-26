export const blog = {
  eyebrow: "Ressources",
  heading: "Comprendre avant d’agir.",
  intro:
    "Analyses courtes pour les maîtres d’ouvrage, collectivités et équipes projet.",

  posts: [
    {
      slug: "diagnostic-avant-planter",
      category: "Méthode",
      date: "2026-01-12",
      title: "Pourquoi planter sans diagnostic est une erreur",
      excerpt:
        "Un sol fertile n’est pas une intuition. C’est une mesure. Avant de planter, il faut caractériser le sol, l’eau et le potentiel productif.",
      content: [
        "Dans beaucoup de projets urbains, la végétalisation commence par une intention : planter, verdir, embellir. Mais sans diagnostic, cette intention repose sur une intuition.",
        "Un bureau d’études structurel ne fonctionne pas ainsi. Il mesure avant de dimensionner. Il caractérise avant de prescrire. RECOLT applique cette même rigueur au vivant.",
        "Le diagnostic RECOLT commence par le sol : structure, matière organique, capacité de rétention d’eau, contamination éventuelle, potentiel agronomique.",
        "Ensuite vient la lecture du site : ensoleillement, accès, hydrologie, continuités écologiques, contraintes d’usage.",
        "Enfin, la production potentielle est modélisée. Pas une promesse vague : une estimation technique, documentée et discutable.",
        "Planter sans diagnostic, c’est construire sans étude de sol. Cela peut fonctionner, mais cela crée surtout des coûts cachés, des échecs végétaux et des arbitrages mal documentés.",
      ],
    },
    {
      slug: "terres-excavees-cout-ou-ressource",
      category: "RE-SOL",
      date: "2026-01-19",
      title: "Terres excavées : coût ou ressource ?",
      excerpt:
        "Les terres de chantier sont souvent évacuées comme un déchet. Elles peuvent pourtant devenir une ressource fertile pour le projet.",
      content: [
        "Sur un chantier, les terres excavées sont souvent vues comme un problème : évacuation, transport, mise en décharge, coût.",
        "RE-SOL change ce cadrage. Les terres excavées sont d’abord caractérisées : texture, structure, matière organique, pollution éventuelle, potentiel d’usage.",
        "Si les conditions le permettent, elles sont corrigées et transformées in situ en technosols fertiles. Le projet conserve alors une ressource au lieu de payer une sortie.",
        "L’intérêt n’est pas seulement écologique. Il est économique : moins de camions, moins d’évacuation, moins d’achat de terre végétale, moins de logistique.",
        "C’est aussi un argument réglementaire. Dans un contexte ZAN, chaque mètre carré compte. Réutiliser les sols sur site, c’est activer de la valeur sans artificialiser davantage.",
        "La bonne question n’est donc pas : “où évacuer ces terres ?” mais : “que peut devenir ce sol ?”",
      ],
    },
    {
      slug: "ville-eponge-capter-l-eau",
      category: "Eau",
      date: "2026-01-26",
      title: "Ville éponge : capter l’eau au lieu de la rejeter",
      excerpt:
        "Nos villes ne manquent pas toujours d’eau. Elles la rejettent trop vite. La ville éponge stocke, infiltre et restitue.",
      content: [
        "La ville minérale traite l’eau de pluie comme un déchet : caniveau, réseau, évacuation.",
        "La ville éponge traite l’eau de pluie comme une ressource : infiltration, rétention, restitution lente.",
        "Cette logique change la performance du site. L’eau devient un levier pour la végétation, la biodiversité, la fraîcheur urbaine et la résilience.",
        "Pour un maître d’ouvrage, l’enjeu n’est pas seulement technique. Il devient stratégique : réduire les risques, valoriser les espaces, répondre aux attentes réglementaires.",
        "Le diagnostic PRU évalue précisément cette capacité : quelle eau peut être captée, où, comment, et pour quels usages.",
        "L’objectif n’est pas d’ajouter un objet technique de plus. C’est de transformer la gestion de l’eau en infrastructure vivante.",
      ],
    },
  ],
} as const;