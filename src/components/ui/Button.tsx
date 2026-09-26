import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "dark"
  | "ghost-light"
  | "outline-dark"
  | "outline-light"
  | "link";

type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#22C55E] text-[#04120B] hover:bg-[#4ADE80] active:bg-[#16A34A]",

  dark:
    "bg-forest-900 text-sand-50 hover:bg-forest-800 active:bg-forest-950",

  "ghost-light":
    "bg-forest-950/40 text-sand-100 backdrop-blur-sm hover:bg-forest-950/60",

  "outline-dark":
    "bg-forest-900 text-sand-50 hover:bg-forest-800 active:bg-forest-950",

  "outline-light":
    "bg-forest-950/40 text-sand-100 backdrop-blur-sm hover:bg-forest-950/60",

  link:
    "bg-transparent p-0 text-forest-900 underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "min-h-[44px] px-6 py-3 text-sm",
  lg: "min-h-[52px] px-7 py-4 text-[15px]",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  disabled,
}: Props) {
  const cls = cn(
    base,
    variants[variant],
    variant === "link" ? "" : sizes[size],
    className,
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
    >
      {children}
    </button>
  );
}