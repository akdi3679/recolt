import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageImages } from "@/data/pages";

export const metadata: Metadata = {
  title: "Équipe",
  description:
    "L'équipe B.E. RECOLT : direction, pédologie, cartographie SIG, Laboratoire du Vivant.",
};

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="L'équipe"
        image={pageImages.equipe}
        imageLabel="Équipe"
        title={
          <>
            Des personnes
            <br />
            identifiables.
          </>
        }
        subtitle="Chaque projet RECOLT est porté par des personnes nommées, joignables et responsables."
        cta={{ href: "/contact", label: "Nous contacter" }}
        secondaryCta={{ href: "/methode", label: "Voir la méthode" }}
      />

      <section className="bg-sand-100 py-20 lg:py-28">
        <Container size="narrow">
          <div className="rounded-xl border border-forest-900/10 bg-sand-50 p-10 lg:p-12">
            <p className="text-[11px] uppercase tracking-[0.22em] text-forest-700">
              Publication en cours
            </p>

            <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-forest-900 sm:text-4xl">
              Les profils de l’équipe seront publiés après finalisation des
              accords individuels.
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
              Nous ne publions pas de profils génériques. Chaque membre de
              l’équipe sera identifiable, joignable et responsable des projets
              qui lui sont confiés.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Nous écrire
              </Button>

              <Button href="/laboratoire" variant="dark" size="lg">
                Laboratoire du Vivant
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}