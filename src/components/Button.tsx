// components/Button.tsx — cyan primary to match Astro palette
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
}

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
    "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-cyan-600 text-slate-950 " +
      "shadow-[0_14px_45px_-22px_rgba(34,211,238,0.55)] hover:translate-y-[-1px]",
    ghost: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  };

  const classes = cn(baseStyles, variantStyles[variant], className);

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

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
