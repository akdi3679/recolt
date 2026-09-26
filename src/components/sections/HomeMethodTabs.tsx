"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { method } from "@/data/method";

export function HomeMethodTabs() {
  const [active, setActive] = useState(method[0].id);
  const current = method.find((step) => step.id === active) ?? method[0];

  return (
    <section className="border-b border-sand-100/10 bg-forest-950 py-20 text-sand-100 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#E7C36B]">
            <span className="inline-block h-px w-8 bg-[#E7C36B]" />
            Méthodologie
          </p>

          <h2 className="mt-5 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-sand-50 sm:text-4xl">
            Diagnostic avant de planter.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand-200/80">
            Trois outils propriétaires, articulés en séquence. Chacun produit
            une donnée opposable.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Étapes de la méthode"
          className="mt-12 flex flex-wrap gap-2 border-b border-sand-100/10"
        >
          {method.map((step) => {
            const isActive = active === step.id;

            return (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`method-panel-${step.id}`}
                onClick={() => setActive(step.id)}
                className={`group relative flex items-center gap-3 px-5 py-4 text-left transition-colors ${
                  isActive
                    ? "text-sand-50"
                    : "text-sand-300/60 hover:text-sand-100"
                }`}
              >
                <span
                  className={`font-serif text-xs tracking-wider ${
                    isActive
                      ? "text-[#E7C36B]"
                      : "text-sand-300/40"
                  }`}
                >
                  {step.code}
                </span>

                <span className="font-serif text-base tracking-[-0.01em]">
                  {step.name}
                </span>

                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-[#E7C36B]"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          id={`method-panel-${current.id}`}
          role="tabpanel"
          className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-sand-200/85">
              {current.role}
            </p>

            <p className="mt-8 border-t border-sand-100/10 pt-6 text-[15px] leading-relaxed text-[#E7C36B]">
              {current.benefit}
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-lg border border-sand-100/10 bg-forest-900/50 p-8">
              <p className="text-xs uppercase tracking-[0.15em] text-sand-300/60">
                Livrable
              </p>

              <p className="mt-4 font-serif text-xl tracking-[-0.01em] text-sand-50">
                Dossier technique chiffré
              </p>

              <p className="mt-3 text-sm leading-relaxed text-sand-200/70">
                Données physico-chimiques, cartographies, recommandations.
                Formaté pour appel d’offres et dossier réglementaire.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}