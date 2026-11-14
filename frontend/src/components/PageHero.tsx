import type { ReactNode } from 'react';
import { Img } from './Img';
import { Stamp } from './Stamp';

interface Props { eyebrow: string; title: ReactNode; intro: ReactNode; image: string; imageAlt: string; notch: ReactNode; actions?: ReactNode; stampText?: string; }

/** Inner-page hero in the template's style: statement on the left, a rounded photo frame with a white notched caption and a rotating stamp on the right. */
export function PageHero({ eyebrow, title, intro, image, imageAlt, notch, actions, stampText }: Props) {
  const scroll = () => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section className="bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-center gap-5 py-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.02] text-ink text-balance">{title}</h1>
          <div className="text-lg sm:text-xl leading-snug text-body max-w-[560px] space-y-3">{intro}</div>
          {actions && <div className="flex flex-wrap gap-3 pt-2">{actions}</div>}
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px] rounded-[28px] overflow-hidden bg-neutral-100">
            <Img src={image} alt={imageAlt} loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest/30 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
            <Notch>{notch}</Notch>
            <div className="absolute bottom-[86px] sm:bottom-[112px] right-4 sm:right-6 z-10 hidden sm:block">
              <div className="rounded-full bg-white/85 backdrop-blur-sm p-0.5 shadow-sm">
                <Stamp text={stampText} onClick={scroll} ariaLabel="Scroll to page content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Notch({ children }: { children: ReactNode }) {
  return (
    <div className="absolute bottom-0 right-0 bg-white rounded-tl-[32px] pt-5 sm:pt-6 pl-6 sm:pl-7 pr-5 pb-2 max-w-[88%] sm:max-w-[80%]">
      <svg viewBox="0 0 28 28" className="w-7 h-7 text-white absolute -top-7 right-0 pointer-events-none" fill="currentColor" aria-hidden="true"><path d="M28 0V28H0C15.464 28 28 15.464 28 0Z" /></svg>
      <svg viewBox="0 0 28 28" className="w-7 h-7 text-white absolute bottom-0 -left-7 pointer-events-none" fill="currentColor" aria-hidden="true"><path d="M28 0V28H0C15.464 28 28 15.464 28 0Z" /></svg>
      <div className="font-display text-[22px] sm:text-[32px] xl:text-[36px] font-extrabold uppercase tracking-tight leading-[0.98] text-ink">{children}</div>
    </div>
  );
}
