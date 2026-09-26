"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-sand-100 px-6 text-center">
      <p className="text-[11px] uppercase tracking-[0.22em] text-forest-600">
        Erreur
      </p>

      <h1 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-forest-900 sm:text-5xl">
        Une erreur est survenue.
      </h1>

      <p className="max-w-md text-sm leading-relaxed text-ink-700">
        Quelque chose s’est mal passé. Vous pouvez réessayer. Si le problème
        persiste, contactez-nous à contact@recolt.fr.
      </p>

      <button
        onClick={reset}
        className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-forest-800 px-7 text-sm font-medium text-sand-50 transition-colors hover:bg-forest-700"
      >
        Réessayer
      </button>
    </div>
  );
}