"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type Tab = {
  id: string;
  label: string;
  short: string;
  content: React.ReactNode;
};

export function TabbedSection({
  eyebrow,
  heading,
  intro,
  tabs,
  dark = false,
  defaultTab,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  tabs: Tab[];
  dark?: boolean;
  defaultTab?: string;
}) {
  const [active, setActive] = useState(defaultTab ?? tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section
      className={cn(
        "border-b py-24 lg:py-32",
        dark
          ? "border-sand-100/10 bg-forest-950 text-sand-100"
          : "border-forest-900/8 bg-sand-100",
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p
            className={cn(
              "flex items-center gap-3 text-[11px] uppercase tracking-[0.22em]",
              dark ? "text-terra-400" : "text-terra-600",
            )}
          >
            <span
              className={cn(
                "inline-block h-px w-8",
                dark ? "bg-terra-400" : "bg-terra-600",
              )}
            />
            {eyebrow}
          </p>
          <h2
            className={cn(
              "mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.02em] sm:text-5xl",
              dark ? "text-sand-50" : "text-forest-900",
            )}
          >
            {heading}
          </h2>
          {intro && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg leading-relaxed",
                dark ? "text-sand-200/80" : "text-ink-700",
              )}
            >
              {intro}
            </p>
          )}
        </div>

        {/* Navbar tabs */}
        <div
          role="tablist"
          className={cn(
            "mt-14 flex flex-wrap gap-2 border-b",
            dark ? "border-sand-100/10" : "border-forest-900/10",
          )}
        >
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tab-panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "group relative flex items-center gap-3 px-5 py-4 text-left transition-colors",
                  isActive
                    ? dark
                      ? "text-sand-50"
                      : "text-forest-900"
                    : dark
                      ? "text-sand-300/60 hover:text-sand-100"
                      : "text-ink-500 hover:text-forest-900",
                )}
              >
                <span
                  className={cn(
                    "font-serif text-xs tracking-wider",
                    isActive
                      ? "text-terra-500"
                      : dark
                        ? "text-sand-300/40"
                        : "text-ink-400",
                  )}
                >
                  {tab.short}
                </span>
                <span className="font-serif text-base tracking-[-0.01em]">
                  {tab.label}
                </span>
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-terra-500"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id={`tab-panel-${current.id}`}
          role="tabpanel"
          className="mt-12"
        >
          {current.content}
        </div>
      </Container>
    </section>
  );
}