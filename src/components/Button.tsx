import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition";
  const primary =
    "bg-white text-black hover:opacity-90";
  const ghost =
    "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <Link href={href} className={`${base} ${variant === "ghost" ? ghost : primary}`}>
      {children}
    </Link>
  );
}
