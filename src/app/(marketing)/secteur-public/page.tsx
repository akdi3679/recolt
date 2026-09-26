import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { MarchePublic } from "@/components/sections/MarchePublic";
import { FAQ } from "@/components/sections/FAQ";
import { pageImages } from "@/data/pages";

export const metadata: Metadata = {
  title: "Secteur public",
  description:
    "B.E. RECOLT — réponse aux marchés publics d'études environnementales. DC1, DC2, DUME sous 5 jours ouvrés.",
};

export default function SecteurPublicPage() {
  return (
    <>
      <PageHero
        eyebrow="Secteur public"
        image={pageImages["secteur-public"]}
        imageLabel="Commande publique"
        title={
          <>
            Travailler avec nous
            <br />
            en commande publique.
          </>
        }
        subtitle="Registre de la Transparence UE, conformité ZAN et RE2020, documentation complète remise sous 5 jours ouvrés."
        cta={{ href: "/contact", label: "Transmettre un DCE" }}
        secondaryCta={{ href: "/methode", label: "Voir la méthode" }}
      />

      <MarchePublic />
      <FAQ />
    </>
  );
}