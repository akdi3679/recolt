type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function IconSoil({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M3 18h18M3 14h18" />
      <path d="M7 10c0-2 1.5-3.5 3.5-3.5S14 8 14 10" />
      <path d="M11.5 6.5V3M9.5 5l2-2 2 2" />
    </svg>
  );
}

export function IconWater({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </svg>
  );
}

export function IconWheat({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M12 21V8" />
      <path d="M12 8c0-2 1.5-4 3-4M12 8c0-2-1.5-4-3-4" />
      <path d="M12 12c0-2 1.5-4 3-4M12 12c0-2-1.5-4-3-4" />
      <path d="M12 16c0-2 1.5-4 3-4M12 16c0-2-1.5-4-3-4" />
    </svg>
  );
}

export function IconHammer({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M14 6l4 4-8 8-2 2-2-2 2-2Z" />
      <path d="M14 6l2-2 4 4-2 2" />
    </svg>
  );
}

export function IconScan({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M4 16v3a1 1 0 0 0 1 1h3M20 8V5a1 1 0 0 0-1-1h-3M20 16v3a1 1 0 0 1-1 1h-3" />
      <path d="M8 12h8" />
    </svg>
  );
}

export function IconChart({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M4 20V6M10 20v-8M16 20v-12M22 20H2" />
      <circle cx="10" cy="8" r="1" fill="currentColor" />
      <circle cx="16" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconArrow({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconPlus({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconQuote({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M6 17c-1.7 0-3-1.3-3-3 0-3.3 2.5-6.4 6-8l.7 1.3C7.5 8.7 6.4 10.4 6 12c1.7 0 3 1.3 3 3s-1.3 2-3 2Zm11 0c-1.7 0-3-1.3-3-3 0-3.3 2.5-6.4 6-8l.7 1.3c-2.2 1.4-3.3 3.1-3.7 4.7 1.7 0 3 1.3 3 3s-1.3 2-3 2Z" />
    </svg>
  );
}