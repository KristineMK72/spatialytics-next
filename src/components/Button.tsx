
import React from "react";

type Variant = "primary" | "ghost";

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

import Link from "next/link";
import React from "react";

type Variant = "primary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition " +
    "border border-transparent select-none";
  const primary =
    "bg-gradient-to-r from-sky-400/95 to-violet-500/90 text-[#07101a] " +
    "shadow-[0_14px_45px_-22px_rgba(56,189,248,0.6)] hover:translate-y-[-1px] hover:opacity-95";
  const ghost =
    "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:translate-y-[-1px]";

  const classes = `${base} ${variant === "ghost" ? ghost : primary} ${className}`;

  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a className={classes} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }


type AnchorProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    kind?: "link"; // default
    href: string;
  };

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    kind: "button";
    href?: never;
  };

type Props = AnchorProps | ButtonProps;

function classes(variant: Variant, className: string) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-3 font-semibold transition " +
    "border border-transparent select-none";
  const primary =
    "bg-gradient-to-r from-sky-400/95 to-violet-500/90 text-[#07101a] " +
    "shadow-[0_14px_45px_-22px_rgba(56,189,248,0.6)] hover:translate-y-[-1px]";
  const ghost =
    "bg-white/5 text-white border-white/15 hover:bg-white/10 hover:border-white/20 hover:translate-y-[-1px]";

  return [base, variant === "primary" ? primary : ghost, className].join(" ").trim();
}

export default function Button(props: Props) {
  const variant = props.variant ?? "primary";
  const className = classes(variant, props.className ?? "");

  // ✅ Real <button>
  if (props.kind === "button") {
    const { children, variant: _v, className: _c, kind: _k, ...buttonProps } = props;
    return (
      <button className={className} {...buttonProps}>
        {children}
      </button>
    );
  }

  // ✅ Link <a> (default)
  const { children, variant: _v, className: _c, kind: _k, ...anchorProps } = props;
  return (
<<<<<<< HEAD
    <a className={className} {...anchorProps}>
=======
    <Link className={classes} href={href}>
>>>>>>> d976adc (Fix Button.tsx (remove duplicate component + clean imports))
      {children}
    </a>
  );
}
type Variant = "primary" | "ghost";

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

type AnchorButtonProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    asButton?: false;
  };

type RealButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asButton: true;
    href?: string; // optional when using real <button>
  };

type Props = AnchorButtonProps | RealButtonProps;

function classes(variant: Variant, className: string) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-3 font-semibold transition " +
    "border border-transparent";
  const primary =
    "bg-gradient-to-r from-sky-400/95 to-violet-500/90 text-[#07101a] shadow-[0_14px_45px_-22px_rgba(56,189,248,0.6)] " +
    "hover:translate-y-[-1px]";
  const ghost =
    "bg-white/5 text-white border-white/15 hover:bg-white/10 hover:border-white/20 hover:translate-y-[-1px]";
  return [base, variant === "primary" ? primary : ghost, className].join(" ").trim();
}

export default function Button(props: Props) {
  const variant = props.variant ?? "primary";
  const className = classes(variant, props.className ?? "");

  // Render a real <button>
  if ("asButton" in props && props.asButton) {
    const { children, asButton, variant: _v, className: _c, href: _href, ...rest } = props;
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    );
  }

  // Default render: <a>
  const { children, variant: _v, className: _c, asButton, ...rest } = props;
  return (
    <a className={className} {...rest}>
      {children}
    </a>
  );
}
