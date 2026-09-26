import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { laboratoire } from "@/data/laboratoire";
import { pageImages } from "@/data/pages";

export const metadata: Metadata = {
  title: "Laboratoire du Vivant",
  description:
    "Association loi 1901. Cartographie participative. Adhésion gratuite pour les 100 premiers membres fondateurs.",
};

export default function LaboratoirePage() {
  const progress = Math.min(
    100,
    Math.round(
      (laboratoire.membership.count / laboratoire.membership.total) * 100,
    ),
  );

  return (
    <>
      <PageHero
        eyebrow="Laboratoire du Vivant"
        image={pageImages.laboratoire}
        imageLabel="Cartographie participative"
        title={
          <>
            Repérons.
            <br />
            Cartographions.
            <br />
            Transformons.
          </>
        }
        subtitle="Association loi 1901. Un espace ouvert où citoyens, chercheurs et collectivités cartographient le potentiel nourricier des territoires."
        cta={{ href: "#adhesion", label: "Devenir membre fondateur" }}
        secondaryCta={{ href: "/methode", label: "Comprendre la méthode" }}
      />

      <section id="adhesion" className="bg-sand-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-forest-700">
                <span className="inline-block h-px w-8 bg-forest-600" />
                Ce que vous faites concrètement
              </p>

              <h2 className="mt-6 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-forest-900 sm:text-4xl">
                Un laboratoire ouvert, pas une promesse abstraite.
              </h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {laboratoire.concreteAction.items.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-forest-900/10 bg-sand-50 p-6"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#15803D]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-ink-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-forest-950 p-8 text-sand-100 lg:sticky lg:top-28 lg:p-10">
                <p className="text-xs uppercase tracking-[0.15em] text-sand-200/60">
                  {laboratoire.membership.label}
                </p>

                <p className="mt-6 font-serif text-5xl leading-none tracking-[-0.03em] text-sand-50">
                  {laboratoire.membership.count}
                  <span className="text-sand-200/40">
                    /{laboratoire.membership.total}
                  </span>
                </p>

                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-sand-100/10">
                  <div
                    className="h-full rounded-full bg-[#22C55E]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-sand-200/70">
                  L’adhésion est gratuite pour les 100 premiers membres.
                  Rejoignez la cartographie participative.
                </p>

                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="lg" className="w-full">
                    {laboratoire.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}