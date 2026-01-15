// components/ui/Button.tsx
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils"; // ← assuming you have a cn utility (from shadcn/ui or similar)

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Optional: override target/rel for external links */
  target?: string;
  rel?: string;
}

/**
 * A styled button that renders as <a> for external links or Next.js <Link> for internal ones.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
}: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);

  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold " +
    "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-sky-400/95 to-violet-500/90 text-[#07101a] " +
      "shadow-[0_14px_45px_-22px_rgba(56,189,248,0.6)] hover:translate-y-[-1px]",
    ghost: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  };

  const classes = cn(baseStyles, variantStyles[variant], className);

  // External link
  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }

  // Internal navigation with Next.js Link
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
