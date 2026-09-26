import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CTA = {
  href: string;
  label: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageLabel,
  cta,
  secondaryCta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  imageLabel?: string;
  cta?: CTA;
  secondaryCta?: CTA;
}) {
  return (
    <section className="relative overflow-hidden border-b border-sand-100/10 bg-forest-950 pb-16 pt-32 text-sand-100 lg:pb-24 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] text-sand-100 opacity-[0.04] grid-bg lg:block"
      />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className={image ? "lg:col-span-7" : "lg:col-span-10"}>
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#4ADE80]">
            <span className="inline-block h-px w-8 bg-[#22C55E]" />
            {eyebrow}
          </p>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-sand-50 sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-sand-200/80">
              {subtitle}
            </p>
          )}

          {(cta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {cta && (
                <Button href={cta.href} variant="primary" size="lg">
                  {cta.label}
                </Button>
              )}

              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="ghost-light"
                  size="lg"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {image && (
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt=""
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent" />

              {imageLabel && (
                <div className="absolute bottom-3 left-3 rounded-md bg-forest-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-sand-100 backdrop-blur-sm">
                  {imageLabel}
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}