import React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = "", ...props }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}
