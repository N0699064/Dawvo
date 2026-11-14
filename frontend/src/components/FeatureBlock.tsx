import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Img } from './Img';

interface Props {
  label: string;
  title: string;
  body: string;
  points?: string[];
  image: string;
  imageAlt: string;
  overlay?: ReactNode;
  reverse?: boolean;
  to?: string;
  cta?: string;
  tint?: 'mint' | 'sky' | 'sun' | 'lavender';
}

const tints = {
  mint: 'from-emerald-100 via-emerald-50 to-white',
  sky: 'from-sky-100 via-sky-50 to-white',
  sun: 'from-amber-100 via-amber-50 to-white',
  lavender: 'from-violet-100 via-violet-50 to-white',
};

/** Instantly-style feature row: copy on one side, a product visual on a soft gradient panel with a floating UI card on the other. */
export function FeatureBlock({ label, title, body, points = [], image, imageAlt, overlay, reverse, to, cta = 'Learn more', tint = 'mint' }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
      <div className={`lg:col-span-5 space-y-5 ${reverse ? 'lg:order-2' : ''}`}>
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-accent-dark text-xs font-semibold px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />{label}
        </span>
        <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-[1.08] text-ink text-balance">{title}</h3>
        <p className="text-base sm:text-lg text-body leading-relaxed">{body}</p>
        {points.length > 0 && (
          <ul className="space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink">
                <span className="mt-1 w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-accent" /></span>{p}
              </li>
            ))}
          </ul>
        )}
        {to && (
          <Link to={to} className="inline-flex items-center gap-2 font-semibold text-ink hover:text-accent transition-colors">
            {cta} <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
      <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
        <div className={`relative rounded-[28px] bg-gradient-to-br ${tints[tint]} p-4 sm:p-8 lg:p-10 border border-neutral-200/60 overflow-hidden`}>
          <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-100 shadow-[0_20px_60px_-20px_rgba(12,19,43,0.35)]">
            <Img src={image} alt={imageAlt} />
          </div>
          {overlay && <div className="relative mt-4 sm:mt-0 sm:absolute sm:right-4 sm:bottom-4 lg:right-6 lg:bottom-6 sm:max-w-[60%] flex justify-end">{overlay}</div>}
        </div>
      </div>
    </div>
  );
}
