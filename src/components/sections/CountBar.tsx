import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { achievements } from "@/data/achievements";

export function CountBar() {
  const items = achievements.items
    .filter((item) => item.available)
    .slice(0, 4);

  if (items.length === 0) return null;

  return (
    <section
      id="reperes"
      className="border-b border-forest-900/10 bg-sand-100 py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-forest-700">
              <span className="inline-block h-px w-8 bg-forest-600" />
              Repères
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-forest-900 sm:text-4xl">
              {achievements.heading}
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-ink-500">
            Des repères internes et méthodologiques. Pas de promesse
            commerciale sans diagnostic.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-forest-900/10 bg-sand-50 p-7"
            >
              <p className="font-serif text-4xl leading-none tracking-[-0.03em] text-[#9A7B2D] lg:text-5xl">
                <Counter to={item.value} suffix={item.suffix} />
              </p>

              <p className="mt-4 text-sm font-medium text-forest-900">
                {item.label}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-ink-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}