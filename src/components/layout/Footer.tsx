import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/BrandMark";
import { Wordmark } from "@/components/ui/Wordmark";
import { CookieManageLink } from "@/components/layout/CookieManageLink";
import { footerNavigation } from "@/data/navigation";
import { brand } from "@/data/brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* ─── Top transparent sand image ─── */}
      <div
        aria-hidden
        className="pointer-events-none relative z-10 -mt-14 lg:-mt-24"
      >
        {/* Replace with your real file name */}
        <img
          src="/images/footer-sand.png"
          alt=""
          draggable={false}
          className="block h-auto w-full select-none"
        />

        {/* Warm brown fade into footer */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#120B06]/80 via-[#120B06]/30 to-transparent" />
      </div>

      {/* ─── Main footer ─── */}
      <div className="relative bg-forest-950 text-sand-200">
        {/* Gold ribbon line */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9BE76]/70 to-transparent"
        />

        {/* Warm-to-forest blend */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#180F08]/55 via-[#0B120C]/25 to-transparent"
        />

        <Container className="relative py-10 lg:py-12">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <Link
                href="/"
                aria-label="Accueil RECOLT"
                className="flex items-center gap-5"
              >
                <BrandMark size={48} />
                <Wordmark size="lg" className="text-sand-50" />
              </Link>

              <p className="mt-7 max-w-sm text-sm leading-relaxed text-sand-300/80">
                {brand.tagline}
              </p>

              <p className="mt-7 text-xs uppercase tracking-[0.15em] text-sand-400/70">
                Enregistré au {brand.registration}
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-7">
              <FooterCol title="Explorer" items={footerNavigation.explorer} />
            </div>

            <div className="md:col-span-2">
              <FooterCol
                title="Organisation"
                items={footerNavigation.organisation}
              />
            </div>

            <div className="md:col-span-2">
              <FooterCol title="Légal" items={footerNavigation.legal} />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-sand-100/10 pt-6 text-xs text-sand-400/70 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-3">
              <span>© {year}</span>
              <Wordmark size="sm" className="text-sand-200" />
              <span>— Ingénierie Nourricière</span>
            </p>

            <div className="flex items-center gap-6">
              <CookieManageLink />

              <p className="flex items-center gap-3">
                <span>Conforme</span>

                {brand.compliance.map((c, i) => (
                  <span key={c} className="flex items-center gap-3">
                    <span className="text-sand-100">{c}</span>

                    {i < brand.compliance.length - 1 && (
                      <span className="text-sand-400/40">·</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.15em] text-sand-400/60">
        {title}
      </p>

      <ul className="mt-5 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sand-200/80 transition-colors hover:text-sand-50"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}