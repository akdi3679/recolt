 import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export function LegalLayout({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="bg-sand-100 py-20 lg:py-28">
        <Container size="narrow">
          <div className="space-y-12">{children}</div>
        </Container>
      </section>
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl tracking-[-0.01em] text-forest-900">
        {title}
      </h2>

      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-700">
        {children}
      </div>
    </div>
  );
}

export function LegalItem({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.15em] text-ink-500">
        {term}
      </dt>

      <dd className="mt-1 text-forest-900">{children}</dd>
    </div>
  );
}