import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="bg-sand-100 py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-forest-900 p-10 text-sand-100 lg:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 text-sand-100 opacity-[0.05] grid-bg"
            />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-8">
                <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-sand-50 sm:text-5xl lg:text-[3.5rem]">
                  Chaque m² est un espace nourricier.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand-200/80">
                  Diagnostic de sol, potentiel de résilience, indice de
                  production. Parlons de votre site.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
                <Button href="/contact" variant="primary" size="lg">
                  Demander un diagnostic
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}