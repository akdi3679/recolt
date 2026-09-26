"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { faq } from "@/data/faq";

export function FAQ({ limit }: { limit?: number }) {
  const items = limit ? faq.items.slice(0, limit) : faq.items;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-b border-forest-900/8 bg-sand-100 py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-forest-700">
            <span className="inline-block h-px w-8 bg-forest-600" />
            {faq.eyebrow}
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-forest-900 sm:text-5xl">
            {faq.heading}
          </h2>

          <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
            {faq.intro}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl border-t border-forest-900/10">
          {items.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.q}
                className="border-b border-forest-900/10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-lg leading-snug tracking-[-0.01em] text-forest-900 transition-colors group-hover:text-forest-700 sm:text-xl">
                    {item.q}
                  </span>

                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-forest-900/20 text-forest-800 transition-transform duration-300",
                      isOpen && "rotate-45 bg-forest-900 text-sand-50",
                    )}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-500 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] pb-7 opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-[15px] leading-relaxed text-ink-700">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {limit && (
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-forest-900/20 px-6 text-sm font-medium text-forest-900 transition-colors hover:bg-forest-900/5"
            >
              Poser une autre question
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}