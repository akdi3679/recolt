import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { valeur } from "@/data/valeur";

export function ValeurBusiness() {
  return (
    <section className="border-b border-forest-900/8 bg-sand-100 py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-forest-700">
              <span className="inline-block h-px w-8 bg-forest-600" />
              {valeur.eyebrow}
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-forest-900 sm:text-4xl">
              {valeur.heading}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700">
              {valeur.body}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button href={valeur.cta.href} variant="primary" size="lg">
                {valeur.cta.label}
              </Button>

              <p className="max-w-xs text-xs leading-relaxed text-ink-500">
                {valeur.disclaimer}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-lg border border-forest-900/10 bg-forest-900 p-7 text-sand-100 lg:p-8">
              <p className="font-serif text-5xl tracking-[-0.03em] text-sand-50">
                {valeur.stat.value}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-sand-200/80">
                {valeur.stat.label}
              </p>

              <div className="mt-6 border-t border-sand-100/10 pt-5">
                <p className="text-sm font-medium text-sand-50">
                  {valeur.contextNote.title}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-sand-200/70">
                  {valeur.contextNote.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}