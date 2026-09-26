import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-10",
        size === "narrow" ? "max-w-4xl" : "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}