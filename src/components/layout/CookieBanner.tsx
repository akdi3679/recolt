"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cookies } from "@/data/cookies";

type Choice = "accepted" | "rejected" | "custom";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const c of cookies.categories) initial[c.id] = c.enabled;
    return initial;
  });

  useEffect(() => {
    // If banner not required (only exempt trackers), never show
    if (!cookies.requiresConsent) return;

    try {
      const raw = localStorage.getItem(cookies.storageKey);
      if (!raw) {
        setVisible(true);
        return;
      }
      const parsed = JSON.parse(raw) as { ts: number };
      const ageDays = (Date.now() - parsed.ts) / (1000 * 60 * 60 * 24);
      if (ageDays > cookies.consentDurationDays) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function persist(choice: Choice, preferences?: Record<string, boolean>) {
    try {
      localStorage.setItem(
        cookies.storageKey,
        JSON.stringify({ choice, preferences, ts: Date.now() }),
      );
    } catch {
      /* storage unavailable — fail silently, banner will reappear next visit */
    }
    setVisible(false);
  }

  function acceptAll() {
    const all: Record<string, boolean> = {};
    for (const c of cookies.categories) all[c.id] = true;
    persist("accepted", all);
  }

  function rejectAll() {
    const essential: Record<string, boolean> = {};
    for (const c of cookies.categories) essential[c.id] = c.required;
    persist("rejected", essential);
  }

  function saveCustom() {
    persist("custom", prefs);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-body"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-forest-900/15 bg-sand-50 shadow-[0_-8px_32px_rgba(14,26,20,0.12)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2
              id="cookie-banner-title"
              className="font-serif text-xl tracking-[-0.01em] text-forest-900"
            >
              {cookies.banner.title}
            </h2>
            <p
              id="cookie-banner-body"
              className="mt-3 text-sm leading-relaxed text-ink-700"
            >
              {cookies.banner.body}{" "}
              <Link
                href="/politique-cookies"
                className="text-forest-900 underline underline-offset-2"
              >
                Politique cookies
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <div className="flex flex-wrap gap-3">
              {/* Accept + Reject: same size, same prominence — CNIL requirement */}
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex min-h-[44px] min-w-[140px] flex-1 items-center justify-center rounded-md bg-terra-500 px-5 text-sm font-medium text-sand-50 transition-colors hover:bg-terra-600"
              >
                {cookies.banner.acceptAll}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex min-h-[44px] min-w-[140px] flex-1 items-center justify-center rounded-md border border-forest-900/25 bg-transparent px-5 text-sm font-medium text-forest-900 transition-colors hover:border-forest-900 hover:bg-forest-900/5"
              >
                {cookies.banner.rejectAll}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowDetails((v) => !v)}
              aria-expanded={showDetails}
              className="text-xs text-ink-500 underline underline-offset-2 hover:text-forest-900"
            >
              {showDetails ? "Masquer" : cookies.banner.customize}
            </button>
          </div>
        </div>

        {showDetails && (
          <div className="mt-6 border-t border-forest-900/10 pt-6">
            <ul className="space-y-4">
              {cookies.categories.map((cat) => (
                <li
                  key={cat.id}
                  className="flex items-start gap-4 rounded-md border border-forest-900/10 bg-sand-100/60 p-4"
                >
                  <div className="flex-1">
                    <p className="font-serif text-base tracking-[-0.01em] text-forest-900">
                      {cat.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">
                      {cat.description}
                    </p>
                  </div>
                  {cat.required ? (
                    <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-ink-400">
                      Requis
                    </span>
                  ) : (
                    <label className="flex shrink-0 cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={prefs[cat.id] ?? false}
                        onChange={(e) =>
                          setPrefs((p) => ({ ...p, [cat.id]: e.target.checked }))
                        }
                        className="h-4 w-4 rounded border-forest-900/30 text-terra-500 focus:ring-terra-500/30"
                      />
                      <span className="text-sm text-forest-900">Autoriser</span>
                    </label>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={saveCustom}
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-forest-900 px-5 text-sm font-medium text-sand-50 transition-colors hover:bg-forest-800"
              >
                {cookies.banner.savePreferences}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}