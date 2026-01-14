import React from "react";

type FadeInProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function FadeIn({ children, className = "", ...props }: FadeInProps) {
  return (
    <div className={`animate__animated ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
