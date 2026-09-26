import { TabbedSection, type Tab } from "@/components/ui/TabbedSection";
import { differentiation } from "@/data/differentiation";

export function HomeWhyTabs() {
  const tabs: Tab[] = differentiation.options.map((opt, i) => ({
    id: `opt-${i}`,
    short: String(i + 1).padStart(2, "0"),
    label: opt.label,
    content: (
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.15em] text-ink-500">
            {opt.subtitle}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            {opt.body}
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-xs uppercase tracking-[0.15em] text-ink-500">
            Limites
          </p>
          <ul className="mt-6 space-y-4">
            {opt.limitations.map((lim) => (
              <li
                key={lim}
                className="flex items-start gap-4 border-b border-forest-900/10 pb-4 last:border-0"
              >
                <span className="mt-2 h-0.5 w-4 shrink-0 bg-ink-400" />
                <span className="text-[15px] leading-relaxed text-ink-700">
                  {lim}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }));

  // Add the RECOLT tab — the answer
  tabs.push({
    id: "recolt",
    short: "→",
    label: "RECOLT",
    content: (
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.15em] text-terra-700">
            {differentiation.reco.subtitle}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            {differentiation.reco.body}
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-xs uppercase tracking-[0.15em] text-ink-500">
            Ce que nous apportons
          </p>
          <ul className="mt-6 space-y-4">
            {differentiation.reco.advantages.map((adv) => (
              <li
                key={adv}
                className="flex items-start gap-4 border-b border-terra-500/20 pb-4 last:border-0"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terra-500 text-sand-50">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M2.5 6.5l2.5 2.5L9.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[15px] leading-relaxed text-forest-900">
                  {adv}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  });

  return (
    <TabbedSection
      eyebrow={differentiation.eyebrow}
      heading="Pourquoi pas votre ingénieur BTP ? Pourquoi pas un paysagiste ?"
      intro="Trois réponses existent aujourd'hui à la question du vivant en ville. RECOLT propose la quatrième."
      tabs={tabs}
      defaultTab="recolt"
    />
  );
}