import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, BrainCircuit, Network, Store } from 'lucide-react';
import { IMG, TEAM } from '../data/site';
import { PageHero } from '../components/PageHero';
import { Img } from '../components/Img';
import { CtaBand } from '../components/Footer';
import { Bullet, Eyebrow, H2, Section } from '../components/Section';

const APPROACH = [
  { icon: BarChart3, title: 'Monitoring & Analytics', body: 'Real-time tracking of energy generation, consumption and system performance across distributed energy systems.' },
  { icon: BrainCircuit, title: 'Climate AI Optimisation', body: 'ANI™, our own AI, analyses energy data to improve efficiency and support predictive energy management.' },
  { icon: Network, title: 'Distributed Energy Coordination', body: 'Solar, battery storage and electric vehicle charging integrated into one coordinated infrastructure.' },
  { icon: Store, title: 'Clean Energy Marketplace', body: 'A digital marketplace connecting users, suppliers, distributors and innovators across the clean energy ecosystem.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Davwo Energy"
        title="Climate AI infrastructure for the future of clean energy"
        intro={<p>Davwo Energy operates a Climate AI Optimisation Infrastructure platform that improves how distributed renewable energy systems are monitored, coordinated and optimised.</p>}
        image={IMG.cleanEnergy}
        imageAlt="Rolling green hills with a solar farm"
        notch={<>A taste of<br />clean energy</>}
        stampText="• MONITOR • ANALYSE • OPTIMISE • COORDINATE"
      />

      <Section id="content" tone="soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5 space-y-4">
            <Eyebrow>What we do</Eyebrow>
            <H2>Making clean energy work together, at scale</H2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-body leading-relaxed">
            <p>As renewable energy adoption accelerates, energy systems are becoming decentralised and complex. Solar, battery storage and electric vehicle charging networks are expanding fast, and they need intelligent digital infrastructure to run efficiently.</p>
            <p>That is what Davwo provides. Our platform brings together real-time monitoring, advanced data analytics, artificial intelligence and distributed energy coordination for more efficient, resilient and intelligent clean energy systems.</p>
            <p>Today that means a clean energy marketplace, a verified supplier network, the Intelligent Pilot and ANI™, our own energy intelligence. We work with distributors across Europe and Africa, and we help cities and companies build smart, connected infrastructure.</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] bg-forest text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1.5 brand-gradient" aria-hidden="true" />
          <Eyebrow dark>Our mission</Eyebrow>
          <p className="mt-4 font-display text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] max-w-5xl text-balance">
            To provide intelligent digital infrastructure that enables the coordination, optimisation and scalability of distributed renewable energy systems.
          </p>
        </div>
      </Section>

      <Section tone="soft">
        <div className="max-w-3xl space-y-4 mb-10">
          <Eyebrow>Our approach</Eyebrow>
          <H2>A multi-layered platform</H2>
          <p className="text-base sm:text-lg text-body">Davwo is a multi-layered digital infrastructure platform for integrating and optimising distributed energy technologies. It is built on four core components:</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPROACH.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="rounded-[24px] bg-white border border-neutral-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-6">
                <span className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center"><Icon className="w-5 h-5 text-accent" /></span>
                <span className="text-xs font-medium text-neutral-400 tabular-nums">0{i + 1}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink mb-2">{title}</h3>
              <p className="text-sm text-body leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 rounded-[28px] overflow-hidden aspect-[4/3] bg-neutral-100"><Img src={IMG.missionLagos} alt="Lagos, Nigeria" /></div>
          <div className="lg:col-span-6 space-y-5">
            <Eyebrow>The Davwo story</Eyebrow>
            <H2>“Davwo” means taste</H2>
            <p className="text-base sm:text-lg text-body leading-relaxed">The name Davwo comes from the Urhobo language spoken in Oghara, Delta State, Nigeria, where the word means “taste”.</p>
            <p className="text-base sm:text-lg text-body leading-relaxed">Davwo Energy is about letting people and communities experience the benefits of clean, sustainable energy: a true taste of clean energy.</p>
            <p className="text-base sm:text-lg text-body leading-relaxed">We believe the global transition to renewable energy should be not only technological, but also accessible, intelligent and impactful.</p>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="space-y-4 mb-10">
          <Eyebrow>Founding team</Eyebrow>
          <H2>The people behind Davwo</H2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM.map((m) => (
            <article key={m.name} className="rounded-[28px] bg-white border border-neutral-200 overflow-hidden grid grid-cols-1 sm:grid-cols-5">
              <div className="sm:col-span-2 aspect-square sm:aspect-auto bg-neutral-100"><Img src={m.image} alt={m.name} style={{ objectPosition: '50% 25%' }} /></div>
              <div className="sm:col-span-3 p-6 sm:p-7 space-y-2">
                <h3 className="font-display text-xl font-bold text-ink">{m.name}</h3>
                <p className="text-sm font-semibold text-accent">{m.role}</p>
                <p className="text-sm text-body leading-relaxed pt-1">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-neutral-200 p-7 sm:p-10 space-y-5">
            <Eyebrow>What we’re doing now</Eyebrow>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">Davwo is live and working</h3>
            <ul className="space-y-3">
              <Bullet>The Davwo Marketplace for EV chargers, batteries, solar and energy services</Bullet>
              <Bullet>A supplier portal for listings, enquiries, analytics and teams</Bullet>
              <Bullet>The Intelligent Pilot, building a ready-to-use workspace from your infrastructure profile</Bullet>
              <Bullet>ANI™ monitoring, forecasting and plain-English answers over live energy data</Bullet>
              <Bullet>Working with distributors across Europe and Africa</Bullet>
            </ul>
          </div>
          <div className="rounded-[28px] bg-[#f6f9f8] p-7 sm:p-10 space-y-5">
            <Eyebrow>Where we’re going next</Eyebrow>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">Smarter cities and infrastructure</h3>
            <ul className="space-y-3">
              <Bullet>Helping cities and companies become smart cities and smart infrastructure</Bullet>
              <Bullet>One dashboard where every device connects, communicates and operates autonomously through ANI™</Bullet>
              <Bullet>Growing our distributor network across Europe and Africa</Bullet>
              <Bullet>Research and ecosystem partnerships for smarter, more resilient clean energy networks</Bullet>
            </ul>
            <Link to="/solutions/smart-cities" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-accent">Smart Cities & Companies <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </Section>

      <CtaBand title="Let’s build a cleaner, smarter energy future" />
    </>
  );
}
