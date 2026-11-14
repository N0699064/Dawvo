import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HOW_ANI_WORKS, IMG, LAYERS, SOLUTIONS } from '../data/site';
import { PageHero } from '../components/PageHero';
import { Img } from '../components/Img';
import { Timeline } from '../components/Timeline';
import { CtaBand } from '../components/Footer';
import { Eyebrow, H2, Section } from '../components/Section';

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Everything you need to adopt and run clean energy"
        intro={<p>Five connected solutions on one platform: a marketplace, a supplier network, the Intelligent Pilot, smart city and company dashboards, and distribution across Europe and Africa. ANI™ ties them together.</p>}
        image={IMG.grid}
        imageAlt="Abstract energy network"
        notch={<>One platform,<br />every device</>}
      />

      <Section id="content" tone="soft">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((s) => (
            <Link key={s.id} to={s.to} className="group rounded-[28px] bg-white border border-neutral-200 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="aspect-[16/10] bg-neutral-100 overflow-hidden"><Img src={s.image} alt={s.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="text-[11px] font-medium text-neutral-500 tabular-nums">{s.index}</span>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink group-hover:text-accent transition-colors">{s.title}</h2>
                <p className="text-sm text-body leading-relaxed flex-1">{s.headline}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </Link>
          ))}
          <div className="rounded-[28px] bg-forest text-white p-7 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <Eyebrow dark>Not sure where to start?</Eyebrow>
              <h2 className="font-display text-2xl font-bold">Tell us about your homes, sites, fleet or city.</h2>
              <p className="text-white/75 text-sm">We’ll point you to the right part of the platform.</p>
            </div>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-white hover:text-forest transition-colors">Contact us <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl space-y-4 mb-10">
          <Eyebrow>Platform architecture</Eyebrow>
          <H2>Four layers working as one</H2>
          <p className="text-base sm:text-lg text-body">Users access clean energy technologies, systems are monitored in real time, AI optimises performance, and distributed energy resources are coordinated intelligently.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LAYERS.map((l) => (
            <div key={l.index} className="rounded-[24px] border border-neutral-200 overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-24 bg-forest text-white flex items-center justify-center py-4 sm:py-0"><span className="font-display text-3xl font-light">{l.index}</span></div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink">{l.title}</h3>
                <p className="text-sm text-body leading-relaxed">{l.body}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {l.points.map((p) => (<li key={p} className="text-[13px] text-ink flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />{p}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Timeline eyebrow="How ANI™ works" title="Six steps from data to action" steps={HOW_ANI_WORKS} image={IMG.controlRoom} imageAlt="Infrastructure control room" />
      <CtaBand />
    </>
  );
}
