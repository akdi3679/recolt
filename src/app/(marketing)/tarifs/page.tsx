import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageImages } from "@/data/pages";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Cadre tarifaire transparent pour les diagnostics RE-SOL, PRU et IPN-RECOLT.",
};

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        image={pageImages.tarifs}
        imageLabel="Cadre transparent"
        title={
          <>
            Un cadre transparent.
            <br />
            Un devis sur mesure.
          </>
        }
        subtitle="Nous publions un cadre transparent pour que vous sachiez à quoi vous attendre avant même de nous écrire."
        cta={{ href: "/contact", label: "Parler d’un projet" }}
        secondaryCta={{ href: "/secteur-public", label: "Marchés publics" }}
      />

      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}