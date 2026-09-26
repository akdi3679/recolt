import { BrandMark } from "@/components/ui/BrandMark";
import { Wordmark } from "@/components/ui/Wordmark";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-sand-100">
      <div className="animate-pulse">
        <BrandMark size={64} />
      </div>
      <Wordmark size="xl" className="text-forest-900" />
      <p className="text-xs uppercase tracking-[0.22em] text-ink-500">
        Chargement
      </p>
    </div>
  );
}