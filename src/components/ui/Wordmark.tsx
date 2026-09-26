import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes: Record<typeof size, string> = {
    sm: "text-[15px]",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-5xl",
  };

  return (
    <span
      role="img"
      aria-label="RECOLT"
      className={cn(
        "inline-flex items-baseline text-current",
        sizes[size],
        className,
      )}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, system-ui, sans-serif',
        fontWeight: 800,
        letterSpacing: "0.01em",
      }}
    >
      <span aria-hidden>R</span>
      <EMark />
      <span aria-hidden>C</span>
      <span aria-hidden>O</span>
      <span aria-hidden>L</span>
      <span aria-hidden>T</span>
    </span>
  );
}

/**
 * Custom E — three equal bars.
 * Height matches cap-height of the wordmark (0.70em).
 * Width matches a typical bold sans capital E (0.60em).
 * Bars: 0.14em each. Gaps: 0.14em each. Total = 0.70em ✓
 */
function EMark() {
  return (
    <span
      aria-hidden
      className="relative inline-block shrink-0"
      style={{
        height: "0.70em",
        width: "0.60em",
        marginInline: "0.02em",
      }}
    >
      <span
        className="absolute inset-x-0 bg-current"
        style={{ top: 0, height: "0.14em", borderRadius: "1px" }}
      />
      <span
        className="absolute inset-x-0 bg-current"
        style={{ top: "50%", height: "0.14em", marginTop: "-0.07em", borderRadius: "1px" }}
      />
      <span
        className="absolute inset-x-0 bg-current"
        style={{ bottom: 0, height: "0.14em", borderRadius: "1px" }}
      />
    </span>
  );
}