import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
} from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Politique cookies",
  robots: { index: false, follow: true },
};

export default function PolitiqueCookiesPage() {
  return (
    <LegalLayout
      eyebrow="Traceurs et consentement"
      title="Politique cookies"
      subtitle="Conforme à l'article 82 de la loi Informatique et Libertés et aux lignes directrices de la CNIL."
    >
      <LegalSection title="Qu'est-ce qu'un cookie ?">
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal lors
          de la consultation d’un site web. Il permet notamment de reconnaître
          votre navigateur, de conserver vos préférences ou de mesurer
          l’audience.
        </p>
      </LegalSection>

      <LegalSection title="Cookies utilisés sur ce site">
        <div className="overflow-hidden rounded-md border border-forest-900/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-forest-50 text-forest-900">
              <tr>
                <th className="px-4 py-3 font-medium">Catégorie</th>
                <th className="px-4 py-3 font-medium">Finalité</th>
                <th className="px-4 py-3 font-medium">Consentement</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-forest-900/10">
              <tr>
                <td className="px-4 py-3 font-medium text-forest-900">
                  Strictement nécessaires
                </td>
                <td className="px-4 py-3">
                  Fonctionnement du site, sécurité, sessions.
                </td>
                <td className="px-4 py-3">Non requis (exemptés)</td>
              </tr>

              <tr>
                <td className="px-4 py-3 font-medium text-forest-900">
                  Mesure d’audience
                </td>
                <td className="px-4 py-3">
                  Statistiques de visite anonymisées.
                </td>
                <td className="px-4 py-3">Selon solution retenue</td>
              </tr>

              <tr>
                <td className="px-4 py-3 font-medium text-forest-900">
                  Fonctionnels
                </td>
                <td className="px-4 py-3">
                  Préférences utilisateur (langue, thème).
                </td>
                <td className="px-4 py-3">Requis si non exemptés</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Aucun cookie publicitaire ni de réseau social n’est déposé sur ce
          site.
        </p>
      </LegalSection>

      <LegalSection title="Vos choix">
        <p>
          Lors de votre première visite, un bandeau vous permet d’accepter ou
          de refuser les cookies non strictement nécessaires. Vous pouvez
          modifier vos choix à tout moment.
        </p>

        <p>
          Vous pouvez également configurer votre navigateur pour refuser les
          cookies : Chrome, Firefox, Safari et Edge proposent tous des options
          dédiées dans leurs préférences.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          La durée de vie des cookies n’excède pas 13 mois. Le consentement est
          conservé pour une durée maximale de 6 mois, conformément aux
          recommandations de la CNIL.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question relative aux cookies et traceurs, écrivez à{" "}
          <strong>contact@recolt.fr</strong>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}