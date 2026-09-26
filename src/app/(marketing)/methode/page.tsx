import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { method } from "@/data/method";
import { pageImages } from "@/data/pages";

export const metadata: Metadata = {
  title: "Méthode",
  description:
    "RE-SOL, PRU, IPN-RECOLT. Trois outils propriétaires pour transformer une intuition écologique en données opposables.",
};

export default function MethodePage() {
  return (
    <>
      <PageHero
        eyebrow="Méthode"
        image={pageImages.methode}
        imageLabel="RE-SOL · PRU · IPN"
        title={
          <>
            Diagnostic avant
            <br />
            de planter.
          </>
        }
        subtitle="Trois outils propriétaires, articulés en séquence. Chacun produit une donnée opposable."
        cta={{ href: "/contact", label: "Demander un diagnostic" }}
        secondaryCta={{ href: "#re-sol", label: "Voir les outils" }}
      />

      <section className="border-b border-forest-900/8 bg-sand-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-forest-700">
                <span className="inline-block h-px w-8 bg-forest-600" />
                Le principe
              </p>

              <h2 className="mt-6 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-forest-900 sm:text-4xl">
                On ne construit jamais sans étude de sol. On ne devrait jamais
                cultiver sans diagnostic.
              </h2>
            </div>

            <div className="space-y-6 lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-ink-700">
                Le secteur du paysage fonctionne majoritairement à l’intuition.
                Une terre est jugée fertile parce qu’elle est brune. Un balcon
                est déclaré propice parce qu’il est exposé au sud.
              </p>

              <p className="text-lg leading-relaxed text-ink-700">
                Un bureau d’études structurel ne travaille pas ainsi. Il mesure
                avant de dimensionner. Il caractérise avant de prescrire.
              </p>

              <p className="text-lg leading-relaxed text-ink-700">
                RECOLT applique cette rigueur au vivant. Chaque projet commence
                par une séquence de diagnostic qui produit des données
                chiffrées, opposables et reproductibles.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {method.map((step, i) => (
        <section
          key={step.id}
          id={step.id}
          className={`scroll-mt-24 border-b border-forest-900/8 py-20 lg:py-28 ${
            i % 2 === 0 ? "bg-forest-50" : "bg-sand-100"
          }`}
        >
          <Container>
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <p className="font-serif text-6xl font-light tracking-tight text-[#15803D] lg:text-7xl">
                  {step.code}
                </p>

                <h2 className="mt-8 font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-forest-900 sm:text-5xl">
                  {step.name}
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-ink-700">
                  {step.role}
                </p>

                <div className="mt-10 border-t border-forest-900/15 pt-8">
                  <p className="text-xs uppercase tracking-[0.15em] text-ink-500">
                    Bénéfice mesuré
                  </p>

                  <p className="mt-3 text-[15px] leading-relaxed text-forest-800">
                    {step.benefit}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-sand-100 py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-forest-900 sm:text-4xl">
              Chaque diagnostic commence par une conversation.
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Demander un diagnostic
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}