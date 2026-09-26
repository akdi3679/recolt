"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Counter } from "@/components/ui/Counter";
import { achievements } from "@/data/achievements";
import { blog } from "@/data/blog";

type Mode = "counters" | "blog";

type CounterItem = {
  value: number;
  suffix: string;
  label: string;
};

type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
};

function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function HeroShowcase() {
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<Mode | null>(null);
  const [counterItems, setCounterItems] = useState<CounterItem[]>([]);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const availableCounters = achievements.items.filter(
      (item) => item.available
    ) as CounterItem[];

const availablePosts = (blog?.posts ?? []) as readonly BlogPost[];
    const modes: Mode[] = [];
    if (availableCounters.length >= 3) modes.push("counters");
    if (availablePosts.length > 0) modes.push("blog");

    if (modes.length === 0) {
      setReady(true);
      return;
    }

    const selectedMode = modes[Math.floor(Math.random() * modes.length)];
    setMode(selectedMode);

    if (selectedMode === "counters") {
      setCounterItems(shuffle(availableCounters).slice(0, 3));
    } else {
      const randomPost =
        availablePosts[Math.floor(Math.random() * availablePosts.length)];
      setBlogPost(randomPost);
    }

    setReady(true);
  }, []);

  if (!ready || !mode) return null;

  return (
    <div className="w-full max-w-[440px]">
      {mode === "counters" ? (
        /* ─── 3 counter cards in a horizontal row ─── */
        <div className="flex items-stretch gap-3">
          {counterItems.map((item, index) => (
            <div
              key={item.label}
              className="hero-card flex h-[110px] w-[130px] flex-col justify-between rounded-lg border border-sand-100/12 bg-forest-950/70 p-4 backdrop-blur-md"
              style={{ animationDelay: `${200 + index * 140}ms` }}
            >
              <p className="font-serif text-2xl leading-none tracking-[-0.02em] text-[#E7C36B]">
                <Counter to={item.value} suffix={item.suffix} duration={1200} />
              </p>
              <p className="text-[9px] uppercase leading-tight tracking-[0.14em] text-sand-200/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* ─── 1 blog card ─── */
        blogPost && (
          <Link
            href={`/blog/${blogPost.slug}`}
            className="hero-card block rounded-lg border border-sand-100/12 bg-forest-950/70 p-5 backdrop-blur-md transition-colors hover:border-sand-100/25"
            style={{ animationDelay: "220ms" }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-sand-100/10 bg-forest-900/60 px-3 py-1 text-[9px] uppercase tracking-[0.14em] text-[#E7C36B]">
                {blogPost.category}
              </span>
              <span className="text-[10px] text-sand-200/50">Article</span>
            </div>

            <p className="mt-4 font-serif text-base leading-snug tracking-[-0.01em] text-sand-50 line-clamp-2">
              {blogPost.title}
            </p>

            <p className="mt-2 text-xs leading-relaxed text-sand-200/60 line-clamp-2">
              {blogPost.excerpt}
            </p>

            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#E7C36B]">
              Lire l'article
              <span aria-hidden>→</span>
            </span>
          </Link>
        )
      )}
    </div>
  );
}