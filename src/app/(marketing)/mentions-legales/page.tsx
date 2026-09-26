import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  LegalItem,
} from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout eyebrow="Informations légales" title="Mentions légales">
      <LegalSection title="Éditeur du site">
        <dl className="grid gap-4 sm:grid-cols-2">
          <LegalItem term="Raison sociale">B.E. RECOLT</LegalItem>
          <LegalItem term="Forme juridique">— à compléter —</LegalItem>
          <LegalItem term="Capital social">— à compléter —</LegalItem>
          <LegalItem term="Siège social">— à compléter —</LegalItem>
          <LegalItem term="SIREN / SIRET">— à compléter —</LegalItem>
          <LegalItem term="RCS">— à compléter —</LegalItem>
          <LegalItem term="N° TVA intracommunautaire">
            — à compléter —
          </LegalItem>
          <LegalItem term="Directeur de la publication">
            — à compléter —
          </LegalItem>
          <LegalItem term="Email de contact">contact@recolt.fr</LegalItem>
        </dl>
      </LegalSection>

      <LegalSection title="Hébergeur">
        <dl className="grid gap-4 sm:grid-cols-2">
          <LegalItem term="Nom">Vercel Inc.</LegalItem>
          <LegalItem term="Adresse">
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
          </LegalItem>
          <LegalItem term="Site">https://vercel.com</LegalItem>
        </dl>
      </LegalSection>

      <LegalSection title="Enregistrement institutionnel">
        <p>
          B.E. RECOLT est enregistré au Registre de la Transparence de l’Union
          Européenne, conformément à l’accord interinstitutionnel du 20 mai
          2021.
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L’ensemble des contenus du présent site (textes, images, schémas,
          marques, logotypes) est protégé par le droit de la propriété
          intellectuelle. Toute reproduction, même partielle, est interdite
          sans autorisation écrite préalable.
        </p>

        <p>
          Les marques <strong>RE-SOL</strong>, <strong>PRU</strong> et{" "}
          <strong>IPN-RECOLT</strong> sont des marques ou marques en cours
          d’enregistrement de B.E. RECOLT.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          B.E. RECOLT s’efforce d’assurer l’exactitude des informations
          publiées sur ce site mais ne peut garantir l’absence d’erreur.
          L’utilisation des informations publiées se fait sous la seule
          responsabilité de l’utilisateur.
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>
          Le présent site et ses conditions d’utilisation sont soumis au droit
          français. Tout litige relatif à l’utilisation du site relève de la
          compétence des tribunaux français.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}