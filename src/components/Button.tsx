import React from "react";

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
