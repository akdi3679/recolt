import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/hero";

// Single hero image (replace with your own local image path if needed, e.g., "/images/hero.jpg")
const heroImage = {
  src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1800&q=80",
  alt: "Terres cultivées vues du ciel",
};

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[600px] flex-col overflow-hidden bg-forest-950 text-sand-100">
      {/* ─── Full background image ─── */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark overlay — stronger on left for text, lighter on right for image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,15,10,0.94) 0%, rgba(6,15,10,0.78) 28%, rgba(6,15,10,0.38) 58%, rgba(6,15,10,0.12) 100%)",
          }}
        />

        {/* Bottom fade into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(6,15,10,0.9), transparent)",
          }}
        />
      </div>

      {/* ─── Content ─── */}
      <Container className="relative z-10 flex flex-1 items-center pb-16 pt-24 lg:pt-28">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#4ADE80]">
            <span className="inline-block h-px w-8 bg-[#22C55E]" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-7 font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-sand-50 sm:text-6xl lg:text-[4rem]">
            {hero.headline.line1}
            <br />
            {hero.headline.line2Before}
            <span className="text-[#4ADE80]">
              {hero.headline.line2Emphasis}
            </span>
            {hero.headline.line2After}
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-sand-200/90">
            {hero.problem}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={hero.ctas.primary.href} variant="primary" size="lg">
              {hero.ctas.primary.label}
            </Button>

            <Button
              href={hero.ctas.secondary.href}
              variant="ghost-light"
              size="lg"
            >
              {hero.ctas.secondary.label}
              <span aria-hidden className="ml-1">
                →
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}