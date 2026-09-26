"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/BrandMark";
import { Wordmark } from "@/components/ui/Wordmark";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const p = Math.min(y / 180, 1);
      setOpacity(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-200"
      style={{
        backgroundColor: `rgba(6, 15, 10, ${opacity * 0.9})`,
        backdropFilter: opacity > 0.25 ? "blur(14px)" : "none",
        WebkitBackdropFilter: opacity > 0.25 ? "blur(14px)" : "none",
      }}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Accueil RECOLT"
          className="flex items-center gap-4"
          onClick={() => setOpen(false)}
        >
          <BrandMark size={44} />
          <Wordmark size="md" className="text-sand-50" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors",
                      isActive
                        ? "text-[#4ADE80]"
                        : "text-sand-200/85 hover:text-sand-50",
                    )}
                  >
                    {item.label}

                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#22C55E]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" size="md">
            Diagnostic
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest-950/40 text-sand-100 backdrop-blur-sm lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
            {open ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-sand-100/10 bg-forest-950/95 backdrop-blur-xl lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base transition-colors",
                  pathname === item.href
                    ? "bg-[#22C55E]/10 text-[#4ADE80]"
                    : "text-sand-100 hover:bg-sand-100/5",
                )}
              >
                {item.label}
              </Link>
            ))}

            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              Demander un diagnostic
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}