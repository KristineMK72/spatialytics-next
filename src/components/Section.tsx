export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mt-10 md:mt-14 lg:mt-16 ${className}`}>
      {children}
    </section>
  );
}
