import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-sand-100 px-6 text-center">
      <p className="font-serif text-7xl leading-none tracking-[-0.04em] text-forest-900">
        404
      </p>

      <h1 className="max-w-xl font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-forest-900 sm:text-4xl">
        Cette page n’existe pas.
      </h1>

      <p className="max-w-md text-sm leading-relaxed text-ink-700">
        La page demandée est introuvable ou a été déplacée.
      </p>

      <Link
        href="/"
        className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-forest-800 px-7 text-sm font-medium text-sand-50 transition-colors hover:bg-forest-700"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}