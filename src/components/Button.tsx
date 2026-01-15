import Link from "next/link";
import React from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

function getClasses(variant: ButtonVariant, className: string = "") {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60";

  const primary =
    "bg-gradient-to-r from-sky-400/95 to-violet-500/90 text-[#07101a] " +
    "shadow-[0_14px_45px_-22px_rgba(56,189,248,0.6)] hover:translate-y-[-1px]";

  const ghost =
    "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return [base, variant === "primary" ? primary : ghost, className]
    .join(" ")
    .trim();
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = getClasses(variant, className);

  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
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
