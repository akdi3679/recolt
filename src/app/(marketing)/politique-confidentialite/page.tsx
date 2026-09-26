import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
} from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Traitement des données personnelles conformément au RGPD. Responsable de traitement, finalités, durées, droits.",
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      subtitle="Conforme au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés."
    >
      <LegalSection title="Responsable de traitement">
        <p>
          Le responsable de traitement est <strong>B.E. RECOLT</strong>. Pour
          toute question relative à la présente politique, vous pouvez écrire à{" "}
          <strong>contact@recolt.fr</strong>.
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>
          Nous collectons uniquement les données strictement nécessaires aux
          finalités décrites ci-dessous :
        </p>

        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Formulaire de contact</strong> : nom, email, organisation
            (optionnelle), sujet, message.
          </li>

          <li>
            <strong>Adhésion au Laboratoire du Vivant</strong> : nom, email,
            code postal (facultatif), motivation (facultative).
          </li>

          <li>
            <strong>Journaux techniques</strong> : adresse IP tronquée, type de
            navigateur, date et heure de la requête, pages consultées.
          </li>
        </ul>

        <p>
          Aucune donnée sensible au sens de l’article 9 du RGPD n’est
          collectée.
        </p>
      </LegalSection>

      <LegalSection title="Finalités et bases légales">
        <div className="overflow-hidden rounded-md border border-forest-900/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-forest-50 text-forest-900">
              <tr>
                <th className="px-4 py-3 font-medium">Finalité</th>
                <th className="px-4 py-3 font-medium">Base légale</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-forest-900/10">
              <tr>
                <td className="px-4 py-3">
                  Répondre aux demandes de contact
                </td>
                <td className="px-4 py-3">Intérêt légitime (art. 6.1.f)</td>
              </tr>

              <tr>
                <td className="px-4 py-3">
                  Gérer l’adhésion au Laboratoire du Vivant
                </td>
                <td className="px-4 py-3">Consentement (art. 6.1.a)</td>
              </tr>

              <tr>
                <td className="px-4 py-3">
                  Sécurité du site et prévention des abus
                </td>
                <td className="px-4 py-3">Intérêt légitime (art. 6.1.f)</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Mesure d’audience anonymisée</td>
                <td className="px-4 py-3">Consentement ou exemption CNIL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="Durées de conservation">
        <ul className="ml-5 list-disc space-y-2">
          <li>Demandes de contact : 3 ans à compter du dernier échange.</li>
          <li>Adhésion LVR : durée de l’adhésion, puis 3 ans.</li>
          <li>Journaux techniques : 12 mois maximum.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Destinataires">
        <p>
          Les données sont destinées aux seuls membres habilités de l’équipe.
          Elles peuvent être transmises aux sous-traitants techniques
          suivants, dans le strict cadre de leurs missions :
        </p>

        <ul className="ml-5 list-disc space-y-2">
          <li>
            Hébergeur du site (Vercel Inc., États-Unis — clauses contractuelles
            types).
          </li>
          <li>Prestataire d’envoi d’emails transactionnels.</li>
          <li>Prestataire de mesure d’audience respectueux de la vie privée.</li>
        </ul>

        <p>
          Aucun transfert de données à des fins commerciales n’est réalisé.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>

        <ul className="ml-5 list-disc space-y-2">
          <li>Droit d’accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l’effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité</li>
          <li>Droit d’opposition</li>
          <li>Droit de retirer votre consentement à tout moment</li>
        </ul>

        <p>
          Pour exercer ces droits, écrivez à{" "}
          <strong>contact@recolt.fr</strong>. Une réponse vous sera apportée
          dans un délai d’un mois.
        </p>

        <p>
          Vous avez également le droit d’introduire une réclamation auprès de
          la CNIL (www.cnil.fr).
        </p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>
          Nous mettons en œuvre les mesures techniques et organisationnelles
          appropriées pour protéger vos données contre tout accès, altération,
          divulgation ou destruction non autorisés : chiffrement des
          communications (HTTPS), contrôle d’accès, journalisation des accès
          sensibles, minimisation des données.
        </p>
      </LegalSection>

      <LegalSection title="Modifications">
        <p>
          La présente politique peut être modifiée à tout moment. La version en
          vigueur est celle publiée sur cette page.
        </p>

        <p className="text-sm text-ink-500">
          Dernière mise à jour : — à compléter —.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}