import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { brand } from "@/data/brand";
import { pageImages } from "@/data/pages";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "B.E. RECOLT — bureau d'études en ingénierie nourricière. Société commerciale et association citoyenne.",
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        image={pageImages["a-propos"]}
        imageLabel="Bureau d'études + association"
        title={
          <>
            Un bureau d’études.
            <br />
            Une conviction.
          </>
        }
        subtitle="RECOLT réunit une société d’ingénierie et une association citoyenne autour d’une même hypothèse : chaque mètre carré urbain peut devenir un espace nourricier."
        cta={{ href: "/contact", label: "Nous écrire" }}
        secondaryCta={{ href: "/methode", label: "Voir la méthode" }}
      />

      <section className="bg-sand-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-xl border border-forest-900/10 bg-sand-50 p-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-forest-700">
                B.E. RECOLT
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-forest-900">
                La structure d’ingénierie.
              </h2>

              <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
                Études techniques, diagnostics de sol, potentiels de
                résilience, indices de production, assistance à maîtrise
                d’ouvrage et livrables opposables.
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                Chaque mission produit des données chiffrées, exploitables par
                les maîtres d’ouvrage, les collectivités et les équipes
                projets.
              </p>
            </div>

            <div className="rounded-xl border border-forest-900/10 bg-sand-50 p-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-forest-700">
                Laboratoire du Vivant
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-forest-900">
                La structure citoyenne.
              </h2>

              <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
                Association loi 1901 dédiée à la cartographie participative, à
                la prospective urbaine et à la montée en compétence des
                territoires.
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                Le Laboratoire relie citoyens, chercheurs, collectivités et
                acteurs de terrain autour du potentiel nourricier des espaces
                urbains.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-xl bg-forest-950 p-10 text-sand-100 lg:p-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#4ADE80]">
              Principe
            </p>

            <p className="mt-6 max-w-3xl font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-sand-50 sm:text-4xl">
              {brand.authority}
            </p>

            <div className="mt-10">
              <Button href="/contact" variant="primary" size="lg">
                Demander un diagnostic
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}