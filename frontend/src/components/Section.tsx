import type { ReactNode } from 'react';

export function Section({ id, children, className = '', tone = 'white' }: { id?: string; children: ReactNode; className?: string; tone?: 'white' | 'soft' | 'dark' }) {
  const bg = tone === 'soft' ? 'bg-[#f6f9f8]' : tone === 'dark' ? 'bg-forest text-white' : 'bg-white';
  return (
    <section id={id} className={`${bg} px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20 ${className}`}>
      <div className="max-w-[1320px] mx-auto">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? 'text-mint' : 'text-accent'}`}>{children}</p>;
}

export function H2({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase tracking-tight leading-[1.03] text-balance ${className}`}>{children}</h2>;
}

export function Bullet({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li className={`flex items-start gap-2.5 text-sm sm:text-[15px] ${dark ? 'text-white/85' : 'text-ink'}`}>
      <span className="text-accent font-bold shrink-0" aria-hidden="true">—</span>
      <span>{children}</span>
    </li>
  );
}
