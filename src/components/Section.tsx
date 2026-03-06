import type { ReactNode } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, subtitle, children, className = "" }: Props) {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {title && <h2 className="text-3xl font-bold text-white">{title}</h2>}
        {subtitle && (
          <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}