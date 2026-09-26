import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { pricing } from "@/data/pricing";

export function Pricing() {
  return (
    <section className="border-b border-forest-900/8 bg-forest-50 py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-terra-600">
              <span className="inline-block h-px w-8 bg-terra-600" />
              {pricing.eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-forest-900 sm:text-5xl">
              {pricing.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-700">
              {pricing.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-forest-900/10 bg-forest-900/10 md:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.code} delay={i * 80}>
              <article className="flex h-full flex-col bg-sand-50 p-8">
                <p className="font-serif text-4xl font-light tracking-tight text-terra-500">
                  {tier.code}
                </p>
                <h3 className="mt-6 font-serif text-xl tracking-[-0.01em] text-forest-900">
                  {tier.name}
                </h3>
                <p className="mt-4 flex-1 text-[14px] leading-relaxed text-ink-700">
                  {tier.scope}
                </p>

                <div className="mt-6 border-t border-forest-900/10 pt-6">
                  <p className="font-serif text-lg text-terra-500">
                    {tier.priceFrom}
                  </p>
                  <p className="mt-1 text-xs text-ink-500">{tier.duration}</p>
                </div>

                <p className="mt-6 text-[11px] uppercase tracking-[0.15em] text-ink-400">
                  {tier.suitableFor}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-500">
            {pricing.note}
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-16 rounded-lg border border-forest-900/10 bg-sand-50 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-serif text-2xl tracking-[-0.01em] text-forest-900">
                  {pricing.callout.title}
                </p>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-700">
                  {pricing.callout.body}
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Button
                  href={pricing.callout.cta.href}
                  variant="outline-dark"
                  size="lg"
                >
                  {pricing.callout.cta.label}
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}