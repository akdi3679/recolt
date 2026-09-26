import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { marchePublic } from "@/data/marche-public";

export function MarchePublic() {
  return (
    <>
      {/* Credentials */}
      <section className="border-b border-forest-900/8 bg-sand-100 py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-terra-600">
                <span className="inline-block h-px w-8 bg-terra-600" />
                Crédentiels
              </p>
              <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-forest-900 sm:text-4xl">
                Un dossier recevable du premier coup.
              </h2>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <dl className="space-y-8">
                {marchePublic.credentials.map((c) => (
                  <div
                    key={c.label}
                    className="border-t border-forest-900/15 pt-6"
                  >
                    <dt className="text-[11px] uppercase tracking-[0.15em] text-ink-500">
                      {c.label}
                    </dt>
                    <dd className="mt-3 font-serif text-lg leading-snug text-forest-900">
                      {c.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Documents */}
      <section className="border-b border-forest-900/8 bg-forest-50 py-24 lg:py-32">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-terra-600">
                <span className="inline-block h-px w-8 bg-terra-600" />
                Pièces fournies
              </p>
              <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-forest-900 sm:text-4xl">
                Documents administratifs et techniques remis sous 5 jours ouvrés.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-forest-900/10 bg-forest-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {marchePublic.documents.map((doc, i) => (
              <Reveal key={doc} delay={i * 50}>
                <div className="h-full bg-sand-50 p-6">
                  <p className="font-serif text-2xl font-light text-terra-500">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700">
                    {doc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-b border-forest-900/8 bg-sand-100 py-24 lg:py-32">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-terra-600">
                <span className="inline-block h-px w-8 bg-terra-600" />
                Procédure
              </p>
              <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-forest-900 sm:text-4xl">
                De la réception du DCE au dépôt de l'offre.
              </h2>
            </div>
          </Reveal>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-lg border border-forest-900/10 bg-forest-900/10 lg:grid-cols-4">
            {marchePublic.process.map((step, i) => (
              <Reveal key={step.step} as="li" delay={i * 100}>
                <div className="h-full bg-sand-50 p-8">
                  <p className="font-serif text-3xl font-light text-terra-500">
                    {step.step}
                  </p>
                  <p className="mt-6 font-serif text-lg tracking-[-0.01em] text-forest-900">
                    {step.label}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-ink-500">
                    {step.duration}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-sand-100 pb-24 pt-4 lg:pb-32">
        <Container>
          <Reveal>
            <div className="rounded-lg border border-forest-900/10 bg-forest-900 p-10 text-sand-100 lg:p-14">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
                <div className="lg:col-span-8">
                  <p className="font-serif text-2xl leading-snug tracking-[-0.01em] text-sand-50 sm:text-3xl">
                    Vous préparez un appel d'offres ?
                  </p>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-sand-200/80">
                    Transmettez-nous le DCE. Nous étudions et répondons sous 5 jours ouvrés.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Button
                    href={marchePublic.cta.href}
                    variant="primary"
                    size="lg"
                  >
                    {marchePublic.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}