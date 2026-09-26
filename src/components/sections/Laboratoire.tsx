import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { laboratoire } from "@/data/laboratoire";

export function Laboratoire() {
  const progress = Math.min(
    100,
    Math.round(
      (laboratoire.membership.count / laboratoire.membership.total) * 100,
    ),
  );

  return (
    <section className="border-b border-forest-900/8 bg-sand-100 py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-forest-700">
              <span className="inline-block h-px w-8 bg-forest-600" />
              {laboratoire.eyebrow}
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-forest-900 sm:text-5xl">
              {laboratoire.heading[0]}
              <br />
              {laboratoire.heading[1]}
              <br />
              {laboratoire.heading[2]}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-700">
              {laboratoire.intro}
            </p>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.15em] text-ink-500">
                {laboratoire.concreteAction.title}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {laboratoire.concreteAction.items.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-lg border border-forest-900/10 bg-sand-50 p-6"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A6B1F]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-ink-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside id="adhesion" className="lg:col-span-5">
            <div className="rounded-lg bg-forest-950 p-8 text-sand-100 lg:sticky lg:top-28 lg:p-10">
              <p className="text-xs uppercase tracking-[0.15em] text-sand-200/60">
                {laboratoire.membership.label}
              </p>

              <p className="mt-6 font-serif text-5xl leading-none tracking-[-0.03em] text-sand-50">
                {laboratoire.membership.count}
                <span className="text-sand-200/40">
                  /{laboratoire.membership.total}
                </span>
              </p>

              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-sand-100/10">
                <div
                  className="h-full rounded-full bg-[#E7C36B]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-sand-200/70">
                {laboratoire.membership.note}
              </p>

              <div className="mt-9">
                <Link
                  href={laboratoire.cta.href}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-[#E7C36B] px-7 text-[15px] font-semibold text-forest-950 transition-colors hover:bg-[#F0D48D]"
                >
                  {laboratoire.cta.label}
                  <span aria-hidden className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}