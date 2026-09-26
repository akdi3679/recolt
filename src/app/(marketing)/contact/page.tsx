import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { brand } from "@/data/brand";
import { pageImages } from "@/data/pages";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet. Diagnostic de sol, étude de résilience urbaine, adhésion au Laboratoire du Vivant.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        image={pageImages.contact}
        imageLabel="Contact"
        title={
          <>
            Parlons de
            <br />
            votre site.
          </>
        }
        subtitle="Diagnostic de sol, potentiel de résilience, indice de production. Décrivez votre projet — nous répondons sous 48 heures ouvrées."
      />

      <section className="bg-sand-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="space-y-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink-500">
                    Direct
                  </p>

                  <a
                    href={`mailto:${brand.contact.email}`}
                    className="mt-3 inline-block font-serif text-xl text-forest-900 underline decoration-forest-900/20 underline-offset-4 transition-colors hover:decoration-forest-900"
                  >
                    {brand.contact.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink-500">
                    Réponse
                  </p>

                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                    Sous 48 heures ouvrées.
                  </p>
                </div>

                <div className="border-t border-forest-900/10 pt-8">
                  <p className="text-xs uppercase tracking-[0.15em] text-ink-500">
                    Enregistrement
                  </p>

                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                    {brand.registration}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}