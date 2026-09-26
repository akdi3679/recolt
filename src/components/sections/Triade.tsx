import { Container } from "@/components/ui/Container";
import { IconSoil, IconWater, IconWheat } from "@/components/ui/Icon";
import { triade } from "@/data/triade";

const icons = {
  soil: IconSoil,
  water: IconWater,
  wheat: IconWheat,
} as const;

export function Triade() {
  return (
    <section className="border-b border-forest-900/8 bg-sand-100 py-14 lg:py-18">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-forest-700">
              <span className="inline-block h-px w-8 bg-forest-600" />
              {triade.eyebrow}
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-forest-900 sm:text-4xl">
              {triade.heading}
            </h2>
          </div>

          <a
            href="/methode"
            className="text-sm font-medium text-forest-800 underline-offset-4 transition-colors hover:text-forest-950 hover:underline"
          >
            Voir la méthode →
          </a>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-forest-900/10 bg-forest-900/10 md:grid-cols-3">
          {triade.items.map((item) => {
            const Icon = icons[item.icon];

            return (
              <article key={item.title} className="bg-sand-50 p-6 lg:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-forest-900/15 bg-sand-100 text-forest-700">
                    <Icon size={16} />
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                    {item.indicator}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl tracking-[-0.01em] text-forest-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}