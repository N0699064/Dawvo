import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, X } from 'lucide-react';
import { SOLUTIONS } from '../data/site';
import { Img } from './Img';

export function ServicesAccordion({ title = 'Explore what we can do for you' }: { title?: string }) {
  const [openId, setOpenId] = useState<string>('');
  return (
    <section id="services" className="bg-white py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 border-t border-neutral-200/80">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase tracking-tight leading-[1.03] text-ink max-w-xl mb-8 text-balance">{title}</h2>
        <div className="border-b border-neutral-400/70">
          {SOLUTIONS.map((s) => {
            const open = openId === s.id;
            return (
              <div key={s.id} className="border-t border-neutral-400/70">
                <button type="button" onClick={() => setOpenId(open ? '' : s.id)} aria-expanded={open} aria-controls={`panel-${s.id}`}
                  className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 text-left group cursor-pointer">
                  <span className="flex items-start gap-2 sm:gap-2.5 min-w-0">
                    <span className="text-[11px] font-medium text-neutral-500 tabular-nums pt-1">{s.index}</span>
                    <span className="font-display text-base sm:text-lg lg:text-[21px] font-bold uppercase tracking-tight text-ink group-hover:text-accent transition-colors">{s.title}</span>
                  </span>
                  <span className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${open ? 'border-ink bg-neutral-100' : 'border-neutral-500 group-hover:border-ink'}`} aria-hidden="true">
                    {open ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                {open && (
                  <div id={`panel-${s.id}`} className="pb-8 pt-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div className="lg:col-span-7 space-y-3.5 sm:pl-5">
                      <p className="font-display text-lg sm:text-xl font-semibold text-ink leading-snug">{s.headline}</p>
                      <p className="text-sm sm:text-[15px] text-body leading-relaxed">{s.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5 pt-1">
                        {s.capabilities.map((c) => (
                          <li key={c} className="text-sm text-ink flex items-start gap-2"><span className="text-accent font-bold shrink-0" aria-hidden="true">—</span><span>{c}</span></li>
                        ))}
                      </ul>
                      <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200">
                        <div className="text-xs text-neutral-500 flex flex-wrap items-center gap-2">
                          {s.tags.map((t, i) => (<span key={t} className="flex items-center gap-2">{i > 0 && <span aria-hidden="true">·</span>}{t}</span>))}
                        </div>
                        <Link to={s.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent">Explore {s.short} <ArrowRight className="w-3.5 h-3.5" /></Link>
                      </div>
                    </div>
                    <div className="lg:col-span-5">
                      <div className="rounded-[20px] overflow-hidden aspect-[16/10] w-full bg-neutral-100 border border-neutral-200">
                        <Img src={s.image} alt={s.imageAlt} fallbackLabel={s.title} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
