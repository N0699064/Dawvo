import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Cable, Factory, Landmark, MessagesSquare, Radio, Sparkles, Workflow } from 'lucide-react';
import { IMG, INTEGRATIONS } from '../data/site';
import { PageHero } from '../components/PageHero';
import { FeatureBlock } from '../components/FeatureBlock';
import { AniChatMock, DashboardMock } from '../components/Mocks';
import { CtaBand } from '../components/Footer';
import { Eyebrow, H2, Section } from '../components/Section';

const PILLARS = [
  { icon: Cable, t: 'Connect every device', d: 'Chargers, batteries, solar, smart meters, building systems and fleet vehicles, all on one dashboard.' },
  { icon: MessagesSquare, t: 'Let them communicate', d: 'Devices share data with each other through the Davwo platform instead of sitting in separate apps.' },
  { icon: Workflow, t: 'Operate autonomously', d: 'ANI™, our own GPT for energy infrastructure, schedules, balances and optimises devices automatically.' },
  { icon: Sparkles, t: 'Ask in plain English', d: 'Ask ANI™ how the network is doing today and get answers as live charts, tables and KPIs.' },
];

const WHO = [
  { icon: Landmark, t: 'Cities & councils', d: 'Street infrastructure, public charging, buildings and municipal fleets.' },
  { icon: Building2, t: 'Smart companies', d: 'Offices, campuses and multi-site estates with solar, storage and chargers.' },
  { icon: Factory, t: 'Industry & logistics', d: 'Depots, warehouses and fleets that need reliable, low-cost power.' },
  { icon: Radio, t: 'Infrastructure operators', d: 'Charge point and energy asset operators running networks across sites.' },
];

export default function SmartCities() {
  return (
    <>
      <PageHero
        eyebrow="Smart Cities & Smart Companies"
        title="One dashboard. Every device. Running itself."
        intro={<p>We help cities and companies become smart cities and smart infrastructure. Connect all your devices to one Davwo dashboard, let them communicate, and let them operate autonomously through ANI™, our own GPT.</p>}
        image={IMG.cityBuses}
        imageAlt="Electric city buses charging at a depot"
        notch={<>Smart cities,<br />smart companies</>}
        stampText="• CONNECT • COMMUNICATE • OPERATE • OPTIMISE"
        actions={<Link to="/contact?topic=Smart%20Cities%20%26%20Companies" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors">Talk to us <ArrowRight className="w-4 h-4" /></Link>}
      />

      <Section id="content" tone="soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-5">
            <Eyebrow>The Davwo dashboard</Eyebrow>
            <H2>Your whole city or estate on one screen</H2>
            <p className="text-base sm:text-lg text-body leading-relaxed">Live monitoring of every connected device, with alerts the moment something needs attention, and ANI™ coordinating energy flow between them.</p>
          </div>
          <div className="lg:col-span-7 rounded-[28px] bg-gradient-to-br from-emerald-100 via-emerald-50 to-white p-4 sm:p-8 border border-neutral-200/60">
            <DashboardMock />
            <p className="mt-3 text-[11px] text-body text-right">Illustrative view</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="rounded-[24px] border border-neutral-200 p-6 space-y-3">
              <div className="flex items-center justify-between"><Icon className="w-6 h-6 text-accent" /><span className="text-xs text-neutral-400 tabular-nums">0{i + 1}</span></div>
              <h3 className="font-display text-lg font-bold text-ink">{t}</h3>
              <p className="text-sm text-body leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <FeatureBlock label="ANI™ · Augmented Network Intelligence" title="Our own GPT for energy infrastructure" body="ANI™ monitors, analyses, forecasts and recommends across every connected device. Ask it what your devices are doing and what to do next, in plain English, and let it act on the answer." points={['Recommendations such as shifting charging to cut cost and carbon', 'Demand, carbon and utilisation forecasting', 'Efficiency, cost and carbon reduction insights', 'Automatic scheduling and balancing between devices']} image={IMG.controlRoom} imageAlt="An infrastructure control room" overlay={<AniChatMock />} tint="lavender" />
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <Eyebrow>Connects to what you already have</Eyebrow>
            <H2>Open integrations</H2>
            <p className="text-base sm:text-lg text-body">The Davwo platform connects to leading device platforms and open charging standards, so existing hardware joins the dashboard.</p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
            {INTEGRATIONS.map((n) => (<div key={n} className="rounded-2xl bg-[#f6f9f8] px-5 py-4 text-sm font-semibold text-ink flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent" />{n}</div>))}
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="max-w-3xl space-y-4 mb-10">
          <Eyebrow dark>Who it’s for</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-[1.03]">Built for cities and companies</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHO.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-[24px] bg-white/5 border border-white/10 p-6 space-y-3">
              <Icon className="w-6 h-6 text-mint" />
              <h3 className="font-display text-lg font-bold">{t}</h3>
              <p className="text-sm text-white/75">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Make your city or company smart" body="Tell us about your devices and sites, and we’ll show you how they can work together on one Davwo dashboard." />
    </>
  );
}
