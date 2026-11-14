import { Img } from './Img';

interface Step { step: string; title: string; body: string; }

/** Template "How we work" layout: sticky heading + photo on the left, numbered timeline on the right. */
export function Timeline({ eyebrow, title, steps, image, imageAlt }: { eyebrow: string; title: string; steps: Step[]; image: string; imageAlt: string }) {
  return (
    <section className="bg-white px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 space-y-6">
            <p className="text-sm font-medium text-ink">{eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase tracking-tight leading-[1.03] text-ink text-balance">{title}</h2>
            <div className="rounded-[28px] overflow-hidden aspect-[4/3] bg-neutral-100"><Img src={image} alt={imageAlt} /></div>
          </div>
        </div>
        <ol className="lg:col-span-7 relative">
          <span className="absolute left-[11px] top-2 bottom-2 w-px bg-neutral-300" aria-hidden="true" />
          {steps.map((s) => (
            <li key={s.step} className="relative pl-12 sm:pl-16 py-6 sm:py-8">
              <span className="absolute left-0 top-8 sm:top-10 w-[23px] h-[23px] rounded-full border border-neutral-300 bg-white flex items-center justify-center" aria-hidden="true"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400" /></span>
              <div className="flex items-start gap-4">
                <span className="font-display text-5xl sm:text-6xl font-extrabold text-accent leading-none tabular-nums">{Number(s.step)}</span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm sm:text-[15px] text-body leading-relaxed max-w-md">{s.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
